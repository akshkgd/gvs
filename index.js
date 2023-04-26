const { createServer } = require('http');
const { join } = require('path');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    if (pathname.includes('.') || pathname === '/') {
      // Serve the file normally
      handle(req, res, parsedUrl);
    } else {
      // Serve the same file without the .html extension
      app.render(req, res, `${pathname}.html`);
    }
  }).listen(process.env.PORT || 3000, () => {
    console.log(`> Ready on http://localhost:${process.env.PORT || 3000}`);
  });
});
