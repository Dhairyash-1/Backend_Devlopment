import { configDotenv } from 'dotenv'
configDotenv()
import express from 'express'
const app = express()
app.get('/', (req, res) => {
  res.send('<h1>Auth System </h1>')
})
export default app
