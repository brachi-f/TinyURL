import express from 'express'  
import cors from "cors"
const app = express()
app.use(cors());

const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`TinyURL app listening on http://localhost:${port}`)
})
