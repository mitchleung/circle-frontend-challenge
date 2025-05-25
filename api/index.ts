import app from '../src/app'

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Local server running on port ${PORT}`)
})

process.on('unhandledRejection', (reason) => {
    console.error('Unhandled Rejection', reason)
})

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception', err)
})

export default app
