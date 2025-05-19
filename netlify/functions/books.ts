// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express, { Router } from 'express'
import serverless from 'serverless-http'
import booksRouter from '../../src/router/booksRouter'
import ErrorHandler from '../../src/utils/ErrorHandler'
import { errorHandler } from '../../src/middleware/errorHandler'

const api = express()

const router = Router()
router.get('/hello', (req, res) => res.send('Hello World!'))

api.use('/books', booksRouter)

api.use((_req, _res, next) => {
    next(new ErrorHandler('Route not found', 404))
})

api.use(errorHandler)

export const handler = serverless(api)
