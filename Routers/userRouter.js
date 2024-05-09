import express from "express"
import UserController from "../Controllers/usersController.js"

const UserRouter = express.Router()

UserRouter.get('/', UserController.getList)
UserRouter.get('/:id', UserController.getUserById)
UserRouter.post('/', UserController.addUser)
UserRouter.put('/:id', UserController.updateUser)
UserRouter.delete('/:id', UserController.deleteUser)

export default UserRouter