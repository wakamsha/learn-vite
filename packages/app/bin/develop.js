// @ts-check
const { resolve } = require('path');
const { createServer } = require('../../../builder/vite');

(async () => {
  const server = await createServer({
    basePath: __dirname,
    root: resolve(__dirname, '../'),
  });

  await server.listen();
})();
