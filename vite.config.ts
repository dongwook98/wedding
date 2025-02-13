import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// tsconfigPaths: 절대 경로 설정 플러그인
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@scss': path.resolve(__dirname, 'src/scss'), // scss는 따로 설정해줘야지 작동함, https://github.com/aleclarson/vite-tsconfig-paths/issues/30
    },
  },
});
