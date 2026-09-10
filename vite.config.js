import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({ base: './', server: { port: 5500 }, build: { rollupOptions: { input: 'index.source.html' } }, plugins: [react()] });
