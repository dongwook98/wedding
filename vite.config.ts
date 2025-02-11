import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// tsconfigPaths: 절대 경로 설정 플러그인
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
});
