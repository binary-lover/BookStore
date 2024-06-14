import express from 'express'
import dotenv from 'dotenv'
const app = express()
const port = dotenv.config().parsed.PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello Mern!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})