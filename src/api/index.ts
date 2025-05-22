import express from 'express'
import { errorHandler } from '../middleware/errorHandler'
import booksRouter from '../router/booksRouter'
import ErrorHandler from '../utils/ErrorHandler'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/books', booksRouter)

app.use((_req, _res, next) => {
    next(new ErrorHandler('Route not found', 404))
})

app.use(errorHandler)

app.listen(3000, () => console.log('Server ready on port 3000.'))

module.exports = app
