import express from 'express'
import booksRouter from './router/booksRouter'
import ErrorHandler from './utils/ErrorHandler'
import { errorHandler } from './middleware/errorHandler'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/books', booksRouter)

app.use((_req, _res, next) => {
    next(new ErrorHandler('Route not found', 404))
})

app.use(errorHandler)

export default app
