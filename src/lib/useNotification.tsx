import { toastManager } from "./toastManager";
import type { Notificacion } from "./types";

const createNotify = (type: Notificacion['type']) => {
    return (message: string, options?: Omit<Notificacion, "id" | "message" | "type">) => {
        toastManager.notify({
            message,
            type,
            ...options
        });
    };
};

export const toast = {
    success: createNotify("success"),
    error: createNotify("error"),
    warning: createNotify("warning"),
    info: createNotify("info"),
};

// Mantenemos el hook por si alguien prefiere usarlo, pero ahora solo retorna el objeto global
export function useNotification() {
    return toast;
}