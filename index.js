import express from 'express'
import cors from "cors"
import bodyParser from "body-parser"
import connectDB from './database.js'
import UserRouter from './Routers/userRouter.js'
import LinksRouter from './Routers/linkRouter.js'
import RedirectRouter from './Routers/redirectRouter.js'
import jwt from "jsonwebtoken";

const secret = "JIs%WCfS#Sl454d5FX"

const app = express()
connectDB()

app.use(cors())
app.use(bodyParser.json())


app.post("/login", async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await UserModel.find({ email: email })
    if (email == user.email && password == password) {
      const token = jwt.sign(
        { userId: user.id, userName: user.name }, secret)
      res.send({ accessToken: token })
    } else {
      res.status(401).send({ message: "unauthorized" })
    }
  } catch (e) {
    res.status(400).json({ message: e.message })
  }
})

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body
  try {
    const user = await UserModel.find({ email: email })
    if (user) res.status(409).json({ message: 'Email already exists' })
    const newUser = await UserModel.create({ name, email, password })
    const token = jwt.sign(
      { userId: newUser.id, userName: name }, secret)
    res.send({ accessToken: token })
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
})

const checkJWT = (req, res, next) => {
  const token = req.headers.authorization.slice(7);
  console.log("token", token);
  try {
    const decoded = jwt.verify(token, secret);
    req.userId = decoded.userId;
    next();
  } catch {
    res.status(401).send({ message: "unauthorized" });
  }
}

app.use('/users', checkJWT, UserRouter)
app.use('/links', checkJWT, LinksRouter)
app.use('/', RedirectRouter)

const port = 3000
app.listen(port, () => {
  console.log(`TinyURL app listening on http://localhost:${port}`)
})
