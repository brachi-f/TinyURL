import express from 'express'  
import cors from "cors"
import bodyParser from "body-parser"
import connectDB from './database.js'
import UserRouter from './Routers/userRouter.js'
import LinksRouter from './Routers/linkRouter.js'


const app = express()
connectDB()

app.use(cors())
app.use(bodyParser.json())
app.use('/users', UserRouter)
app.use('/links', LinksRouter)

const port = 3000
app.listen(port, () => {
  console.log(`TinyURL app listening on http://localhost:${port}`)
})
