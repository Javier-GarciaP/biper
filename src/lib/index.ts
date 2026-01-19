import './index.css'

// Exportaciones principales
export { NotificationProvider, NotificationProvider as Toaster } from './NotificationContext';
export { useNotification, toast } from './useNotification';

// Exportar tipos
export type { Notificacion, NotificationContextType } from './types';
