const express = require('express')
const app = express()
const format = require('date-format')
const PORT = process.env.PORT || 4000

const currentDate = format.asString('dd[MM]-hh:mm:ss', new Date())

app.get('/', (req, res) => {
  res.status(200).send('This is express app')
})

app.get('/api/v1/instagram', (req, res) => {
  const instaSocial = {
    username: 'dhairyashgupta',
    followers: '26',
    follows: '10',
    date: currentDate,
  }
  res.status(200).send(instaSocial)
})
app.get('/api/v1/facebook', (req, res) => {
  const instaSocial = {
    username: 'dhairyashfb',
    followers: '5',
    follows: '1',
    date: currentDate,
  }
  res.status(200).send(instaSocial)
})
app.get('/api/v1/linkedin', (req, res) => {
  const instaSocial = {
    username: 'Dhairyash Gupta',
    followers: '315',
    follows: '50',
    date: currentDate,
  }
  res.status(200).send(instaSocial)
})

app.get('/api/v1/:token/:id', (req, res) => {
  console.log(req.params.id)
  res.status(200).json({ param: [req.params.token, req.params.id] })
})

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`)
})
