// @ts-check
const { createServer: createServerOrigin } = require('vite');
const reactRefresh = require('@vitejs/plugin-react-refresh');
const { resolve } = require('path');

/**
 * @typedef {object} Props
 * @property {string} basePath
 * @property {string} root
 * @property {number} [port]
 *
 * @param {Props} props
 */
module.exports.createServer = ({ basePath, root, port = 3000 }) => {
  return createServerOrigin({
    root,
    // @ts-ignore
    plugins: [reactRefresh()],
    esbuild: {
      jsxInject: `import React from 'react';`,
    },
    resolve: {
      alias: {
        '@learn-vite/core': resolve(basePath, '../../core/src'),
      },
    },
    server: {
      port,
    },
  });
};
