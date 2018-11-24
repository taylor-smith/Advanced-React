require('dotenv').config({ path: '.env' })
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// TODO: Use Express middlewear to handle cookies (JWT)
// TODO: Use Express middlewear to populate current user

server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL
  }
}, details => {
  console.log(`Server is now running on port http://localhost:${details.port}`)
})