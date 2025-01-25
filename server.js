import jsonServer from 'json-server';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = jsonServer.create();

// Add logging middleware
server.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Configure json-server
const router = jsonServer.router(join(__dirname, 'database.json'));
const middlewares = jsonServer.defaults({
  readOnly: false,
  noCors: false,
  bodyParser: true
});

// Handle CORS preflight requests
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Error handling middleware
server.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: err.message || 'Internal Server Error' });
});

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('JSON Server is running on port:', port);
  console.log('Database path:', join(__dirname, 'database.json'));
}); 