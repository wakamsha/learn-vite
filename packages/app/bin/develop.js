import { createServer } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { resolve, dirname as _dirname } from 'path';

const dirname = _dirname(new URL(import.meta.url).pathname);

(async () => {
  const server = await createServer({
    plugins: [reactRefresh()],
    root: resolve(dirname, '../'),
    esbuild: {
      jsxInject: `import React from 'react';`,
    },
    resolve: {
      alias: {
        '@learn-vite/core': resolve(dirname, '../../core/src'),
      },
    },
  });

  await server.listen();
})();
