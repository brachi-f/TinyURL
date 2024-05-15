import UserModel from '../Models/UserModel.js'

const UserController = {

    getList: async (req, res) => {
        try {
            const users = await UserModel.find()
            res.json(users)
        } catch (e) {
            res.status(400).json({ message: e.message })
        }
    },
    getUserById: async (req, res) => {
        try {
            const user = await UserModel.findById(req.params.id)
            res.json(user)
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },
    updateUser: async (req, res) => {
        const { id } = req.params
        try {
            const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, { new: true })
            res.json(updatedUser)
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },
    deleteUser: async (req, res) => {
        const { id } = req.params
        try {
            const deleted = await UserModel.findByIdAndDelete(id)
            res.json(deleted)
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },
    getLinks: async (req, res) => {
        const { id } = req.params
        try {
            const user = await UserModel.findById(id)
            const links = user.links
            res.json(links)
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    }

}
export default UserController