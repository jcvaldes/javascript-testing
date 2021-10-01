const express = require('express')
const pino = require('pino-http')()

const app = express()
app.use(pino)
app.use(express.json())

const router = express.Router()

const users = []
router.post('/users', (req, res) => {
  const { name, address, age, id } = req.body
  users.push({ name, address, age, id })
  return res.status(201).send(users)
})
router.get('/users', (req, res) => {
  return res.status(200).send(users)
})
router.get('/users/:id', (req, res) => {
  const { id } = req.params
  const user = users.find((user) => user.id === +id)
  return res.status(200).send(user)
})
router.put('/users/:id', (req, res) => {
  const { name, address, age } = req.body
  const { id } = req.params
  users.push({ name, address, age })
  let user = users.find((user) => user.id === +id)
  user = { ...user, name, address, age }
  return res.status(200).send(user)
})
router.delete('/users/:id', (req, res) => {
  const { id } = req.params
  let users = users.filter((user) => user.id !== +id)
  return res.status(200).send(users)
})
app.use(router)
module.exports = app
