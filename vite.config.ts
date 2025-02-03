import { defineConfig } from 'vite'
import adonisjs from '@adonisjs/vite/client'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    adonisjs({
      /**
       * Entrypoints of your application. Cada entrypoint resultará em um bundle separado.
       */
      entrypoints: ['resources/css/app.css', 'resources/js/app.js'],

      /**
       * Paths para monitoramento e recarregamento automático do navegador ao alterar arquivos.
       */
      reload: ['resources/views/**/*.edge'],
    }),
  ],
})
