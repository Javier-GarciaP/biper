import { createContext, useState, useEffect } from "react";
import { NotificationItem } from "./NotificationItem";
import type { Notificacion, NotificationContextType } from "./types";
import { createPortal } from "react-dom";
import { toastManager } from "./toastManager";

export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

const positionStyles = {
  "top-left": "top-4 left-4 items-start",
  "top-right": "top-4 right-4 items-end",
  "bottom-left": "bottom-4 left-4 items-start",
  "bottom-right": "bottom-4 right-4 items-end",
  "top-center": "top-4 left-1/2 -translate-x-1/2 items-center",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2 items-center",
};

// Interfaz extendida para manejar el estado de salida
interface NotificationWithExit extends Notificacion {
  isExiting?: boolean;
}

let notificationCounter = 0;

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [notifications, setNotifications] = useState<NotificationWithExit[]>([]);

  useEffect(() => {
    // Suscribirse a cambios globales (fuera de React)
    const unsubscribe = toastManager.subscribe((notification) => {
      addNotification(notification);
    });
    return () => unsubscribe();
  }, []);

  // Función para añadir notificación
  const addNotification = (notification: Omit<Notificacion, "id">) => {
    const id = `${Date.now()}-${++notificationCounter}`;
    setNotifications((prev) => [...prev, { ...notification, id, isExiting: false }]);

    // Programar la salida
    setTimeout(() => {
      removeNotification(id);
    }, notification.duration || 3000);
  };

  // Función para remover con animación
  const removeNotification = (id: string) => {
    // Primero marcamos como "exiting" para activar la animación
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isExiting: true } : n))
    );

    // Después de la animación, eliminamos del estado
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 300); // Duración de la animación de salida
  };

  return (
    <NotificationContext value={{ addNotification }}>
      {children}

      {/* Usamos createPortal para que las notificaciones vivan fuera del DOM principal */}
      {createPortal(
        <>
          {(Object.keys(positionStyles) as Array<keyof typeof positionStyles>).map((pos) => {
            // Filtramos las notificaciones que pertenecen a ESTA posición específica
            const notificationsInPos = notifications.filter(
              (n) => (n.position || "top-right") === pos
            );

            // Si no hay notificaciones en esta posición, no renderizamos el contenedor
            if (notificationsInPos.length === 0) return null;

            return (
              <div
                key={pos}
                className={`fixed z-50 p-4 pointer-events-none flex flex-col gap-2 ${positionStyles[pos]}`}
              >
                {notificationsInPos.map((n) => (
                  <div key={n.id} className="pointer-events-auto">
                    <NotificationItem notification={n} />
                  </div>
                ))}
              </div>
            );
          })}
        </>,
        document.body // El destino del Portal
      )}
    </NotificationContext>
  );
};


