import express from 'express'
import { errorHandler } from '../middleware/errorHandler'
import booksRouter from '../router/booksRouter'
import ErrorHandler from '../utils/ErrorHandler'
import cors from 'cors'

const PORT = process.env.PORT || 8000

const app = express()
app.use(express.json())
app.use(cors())
app.get('/', (req, res) => res.send('Express on Vercel'))

app.listen(PORT, () => console.log(`Server ready on port ${PORT}.`))

module.exports = app