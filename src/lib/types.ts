export interface Notificacion {
    id: string;
    title?: string;
    message: string;
    type: "info" | "warning" | "error" | "success";
    color?: string;
    duration?: number;
    position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "bottom-center";
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    isIcon?: boolean;
}

export interface NotificationContextType {
    addNotification: (notification: Omit<Notificacion, "id">) => void;
}