import express from "express"
import redirectController from "../Controllers/redirectController.js"

const redirect = express.Router()

redirect.get('/:url', redirectController.redirect)

export default redirect