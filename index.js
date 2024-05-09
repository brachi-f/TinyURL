import express from 'express'  
import cors from "cors"
import bodyParser from "body-parser"
import connectDB from './database.js'
import UserRouter from './Routers/userRouter.js'


const app = express()
connectDB()

app.use(cors())
app.use(bodyParser.json())
app.use('/users', UserRouter)

const port = 3000
app.listen(port, () => {
  console.log(`TinyURL app listening on http://localhost:${port}`)
})
