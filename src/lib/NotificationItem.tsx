import type { Notificacion } from "./types";
import { CircleCheck, CircleX, TriangleAlert, Info } from "lucide-react";
import { cloneElement } from "react";

// Configuración minimalista con colores sutiles
const typeConfig = {
    success: {
        icon: <CircleCheck />,
        accentColor: "#059669", // green-600
        bgColor: "#ffffff",
        borderColor: "#d1fae5", // green-100
    },
    error: {
        icon: <CircleX />,
        accentColor: "#dc2626", // red-600
        bgColor: "#ffffff",
        borderColor: "#fee2e2", // red-100
    },
    warning: {
        icon: <TriangleAlert />,
        accentColor: "#d97706", // amber-600
        bgColor: "#ffffff",
        borderColor: "#fef3c7", // amber-100
    },
    info: {
        icon: <Info />,
        accentColor: "#2563eb", // blue-600
        bgColor: "#ffffff",
        borderColor: "#dbeafe", // blue-100
    },
};

// Interfaz extendida para incluir isExiting
interface NotificationWithExit extends Notificacion {
    isExiting?: boolean;
}

// Función para determinar la dirección de animación según la posición
const getAnimationClass = (position?: string, isExiting?: boolean): string => {
    const pos = position || "top-right";

    // Determinar dirección según la posición
    let direction = "right"; // por defecto

    if (pos.includes("left")) {
        direction = "left";
    } else if (pos.includes("top")) {
        direction = "top";
    } else if (pos.includes("bottom")) {
        direction = "bottom";
    }

    // Retornar la clase de animación correspondiente
    return isExiting ? `animate-slide-out-${direction}` : `animate-slide-in-${direction}`;
};

export const NotificationItem = ({ notification }: { notification: NotificationWithExit }) => {
    const config = typeConfig[notification.type];

    // Por defecto isIcon es true (mostrar ícono)
    const showIcon = notification.isIcon !== false;

    // Aplicar colores personalizados o usar los predeterminados
    const styles = {
        backgroundColor: notification.backgroundColor || config.bgColor,
        borderLeftColor: notification.borderColor || config.borderColor,
        color: notification.textColor || "#374151", // gray-700
    };

    const iconColor = notification.color || config.accentColor;

    // Determinar la clase de animación basada en posición y estado
    const animationClass = getAnimationClass(notification.position, notification.isExiting);

    return (
        <div
            className={`
                min-w-[280px] max-w-sm
                px-3 py-2.5
                rounded-lg
                border-l-[3px]
                border border-gray-100
                ${animationClass}
            `}
            style={styles}
        >
            <div className="flex items-center gap-2.5">
                {/* Ícono */}
                {showIcon && (
                    <div className="shrink-0">
                        {cloneElement(config.icon, {
                            className: "w-4 h-4",
                            style: { color: iconColor, strokeWidth: 2.5 }
                        })}
                    </div>
                )}

                {/* Contenido */}
                <div className="flex-1 min-w-0">
                    {notification.title && (
                        <h4 className="text-xs font-medium mb-0.5 text-gray-900">
                            {notification.title}
                        </h4>
                    )}
                    <p className="text-xs text-gray-600 leading-snug">
                        {notification.message}
                    </p>
                </div>
            </div>
        </div>
    );
};