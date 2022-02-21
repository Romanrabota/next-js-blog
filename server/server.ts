import express from 'express'
import next from 'next'

import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import { loadControllers, scopePerRequest } from "awilix-express";

import userRoute from './routes/UserRoutes'
import PropertyRoute from './routes/PropertyRoutes'
import ReviewRoute from  './routes/ReviewRoutes' 
import container from './container';

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(compression());
  server.use(cookieParser());
  server.use(bodyParser.json({limit:'10mb'}));
  server.use(bodyParser.urlencoded({ extended: false }));
  
  server.use(scopePerRequest(container));
  const files = 'controllers/**/*.ts';

  
  server.use(loadControllers(files, { cwd: __dirname }));

  // server.use('/api/user', userRoute);
  server.use('/api/properties', PropertyRoute); 
  server.use('/api/reviews', ReviewRoute);


  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})









