import express from 'express'
import cors from 'cors'
import{ MongoClient } from 'mongodb'

import 'dotenv/config'

const app = express()
app.use(cors())
app.use(express.json())
const client = new MongoClient(process.env.Mongo_URI)

client.connect()

app.post('/users',signup)
app.post('users/login', login)
 
signup = async (req, res) => {
    const newUser = req.body
    await db.collection('users').insert(newUser)

}
login = async (res, req) => {
    const{email, password} = req.body
    const user = await db.collection(user).find(email, password).toArray

}
  
    const port = 3000
