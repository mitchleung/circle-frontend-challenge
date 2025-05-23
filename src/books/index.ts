import app from "../app"

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`Local server running on port ${PORT}`)
})

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection', reason)
})

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception', err)
})

module.exports = app