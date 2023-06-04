import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';

export default defineConfig(() => ({
  build: {
    target: 'es2022',
    lib: {
      entry: 'src/index.tsx',
      formats: ['es'],
      fileName: 'index.qwik',
    },
    rollupOptions: {
      external: ['cookie'],
    },
  },
  plugins: [qwikVite()],
}));
