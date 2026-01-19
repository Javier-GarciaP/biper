import type { Notificacion } from "./types";

type Observer = (notification: Omit<Notificacion, "id">) => void;

class ToastManager {
    private observers: Observer[] = [];

    subscribe(observer: Observer) {
        this.observers.push(observer);
        return () => {
            this.observers = this.observers.filter((obs) => obs !== observer);
        };
    }

    notify(notification: Omit<Notificacion, "id">) {
        this.observers.forEach((observer) => observer(notification));
    }
}

export const toastManager = new ToastManager();
