import LinkModel from '../Models/LinkModel.js'
import UserModel from '../Models/UserModel.js'

const LinksController = {
    getLinks: async (req, res) => {
        try {
            const links = await LinkModel.find()
            res.json(links)
        } catch (e) {
            res.status(400).json({ message: e.message })
        }
    },
    getLinkById: async (req, res) => {
        const { id } = req.params
        try {
            const link = await LinkModel.findById(id)
            res.json(link)
        } catch (e) {
            res.status(400).json({ message: e.message })
        }

    },
    addLink: async (req, res) => {
        const { originalURL } = req.body
        const { userId } = req.params
        try {
            const newLink = await LinkModel.create({ originalURL })
            const user = await UserModel.findById(userId)
            user.links.push(newLink.id)
            await user.save()
            res.json(newLink)
        } catch (e) {
            res.status(400).json({ message: e.message })
        }

    },
    updateLink: async (req, res) => {
        const { id } = req.params
        try {
            const updatedLink = await LinkModel.findByIdAndUpdate(id, req.body, { new: true })
            res.json(updatedLink)
        } catch (e) {
            res.status(400).json({ message: e.message })
        }

    },
    deleteLink: async (req, res) => {
        const {id, userId} = req.params
        try {
            const deleted = await LinkModel.findByIdAndDelete(id)
            const user = await UserModel.findById(userId)
            user.links = user.links.filter(l=> l.toString() != id)
            await user.save()
            res.json(deleted)
        } catch (e) {
            res.status(400).json({ message: e.message })
        }

    }
}
export default LinksController