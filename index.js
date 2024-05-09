import express from 'express'  
import cors from "cors"
import connectDB from './database';


const app = express()
connectDB()
app.use(cors())

const port = 3000


app.listen(port, () => {
  console.log(`TinyURL app listening on http://localhost:${port}`)
})
