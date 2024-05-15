import express from "express"
import UserController from "../Controllers/usersController.js"

const UserRouter = express.Router()

// UserRouter.get('/', UserController.getList)
UserRouter.get('/:id', UserController.getUserById)
UserRouter.put('/:id', UserController.updateUser)
UserRouter.delete('/:id', UserController.deleteUser)
UserRouter.get('/:id/links', UserController.getLinks)

export default UserRouter