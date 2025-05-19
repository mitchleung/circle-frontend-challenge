// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import serverless from 'serverless-http'
import express from 'express';
import booksRouter from '../../src/router/booksRouter';

const app = express();
app.use(express.json());
app.use('/', booksRouter); // match Netlify redirect

export const handler = serverless(app);
