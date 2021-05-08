import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import reactSvgPlugin from 'vite-plugin-react-svg';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    reactSvgPlugin({
      // Default behavior when importing `.svg` files, possible options are: 'url' and `component`
      defaultExport: 'url',
    }),
    reactRefresh(),
  ],
});
