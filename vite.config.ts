import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path' // Necesitaremos esto para las rutas
import dts from 'vite-plugin-dts'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    cssInjectedByJsPlugin(),
    dts({
      tsconfigPath: resolve(__dirname, 'tsconfig.app.json'),
      include: ['src/lib/**/*'],
      insertTypesEntry: true,
    })
  ],
  // Quitamos el array del entry y usamos un objeto o ruta simple
  build: {
    lib: {
      // Usamos resolve para que no haya errores de rutas en Windows/Mac
      entry: resolve(__dirname, 'src/lib/index.ts'),
      name: 'react-biper',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // ¡IMPORTANTE! No queremos que React se meta dentro de tu plugin final
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
  },
})