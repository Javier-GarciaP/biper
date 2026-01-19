# React Biper

Imagen:
![](./website/public/screenshop.png)

Librería de notificaciones (toasts) ultra ligera para React. Diseñada para ser minimalista, rápida y sin configuración tediosa.

## Instalación
```bash
npm install react-biper
```

## Configuración rápida

### 1. Envolver tu App
Solo agrega el `Toaster` en el punto más alto de tu aplicación:

```tsx
import { Toaster } from 'react-biper';

function App() {
  return (
    <Toaster>
      <YourApp />
    </Toaster>
  );
}
```

### 2. ¡Lanzar Toasts!
Puedes usarlo de forma directa en cualquier parte de tu código:

```tsx
import { toast } from 'react-biper';

// En cualquier lugar (Componentes, useEffect o funciones normales)
const handleSave = () => {
  toast.success('¡Guardado con éxito!');
};

// Diferentes tipos
toast.error('Ocurrió un error inesperado');
toast.warning('Cuidado con esta acción');
toast.info('Tienes un nuevo mensaje');
```

## Opciones
Todos los métodos aceptan un segundo argumento opcional para personalizar el comportamiento:

```tsx
toast.success('Mensaje', {
  duration: 5000,
  position: 'bottom-right', // 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'top-center', 'bottom-center'
});
```

## Licencia
MIT © José Javier García