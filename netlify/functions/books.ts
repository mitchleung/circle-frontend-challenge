// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import serverless from 'serverless-http'
import express from 'express';
import booksRouter from '../../src/router/booksRouter';
import app from '../../src';

// const app = express();
// app.use(express.json());
// app.use('/books', booksRouter); // match Netlify redirect

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Local server running on port ${PORT}`)
})

export const handler = serverless(app);
