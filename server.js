import jsonServer from 'json-server';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(join(__dirname, 'database.json'));
const middlewares = jsonServer.defaults({
  readOnly: false,
  noCors: false,
  bodyParser: true
});

// Handle CORS preflight requests
server.options('*', (req, res) => {
  res.sendStatus(200);
});

// Add custom middleware for error handling
server.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('JSON Server is running on port:', port);
}); 