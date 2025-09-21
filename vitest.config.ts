// vitest.config.ts
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@constants': path.resolve(__dirname, 'src/constants'),
    },
  },
  server: {
    port: 5173,
  },
  test: {
    globals: true,            // allows you to use describe, it, expect without import
    environment: 'jsdom',     // simulates a browser environment
    setupFiles: './src/setupTests.ts', // runs before tests, for jest-dom and other setup
    coverage: {
      provider: 'istanbul',         // modern coverage provider
      reporter: ['text', 'html', "lcov"], // terminal summary + HTML report
      all: true,               // include all files in coverage
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['node_modules', 'dist'],
    },
  },
});
