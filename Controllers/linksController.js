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
        const { originalURL, targetName } = req.body
        const { userId } = req.params
        try {
            const linkToAdd = { originalURL: originalURL }
            if (targetName) linkToAdd.targetName = targetName
            const newLink = await LinkModel.create(linkToAdd)
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
        const { id, userId } = req.params
        try {
            const deleted = await LinkModel.findByIdAndDelete(id)
            const user = await UserModel.findById(userId)
            user.links = user.links.filter(l => l.toString() != id)
            await user.save()
            res.json(deleted)
        } catch (e) {
            res.status(400).json({ message: e.message })
        }

    },
    addTarget: async (req, res) => {
        const { id } = req.params
        const { targetName } = req.body
        try {
            const link = await LinkModel.findById(id)
            if (link.targetValues.find(t => t.name == targetName))
              return  res.status(409).json({ message: `There is already a target name with this name` })
            const target = {
                name: targetName,
                value: 0
            }
            link.targetValues.push(target)
            await link.save()
            res.json(link)
        } catch (e) {
            res.status(400).json({ message: e.message })
        }
    },
    getTargets: async (req, res) => {
        const { id } = req.params
        try {
            const link = await LinkModel.findById(id)
            const targets = link.targetValues
            res.json(targets)
        } catch (e) {
            res.status(400).json({ message: e.message })
        }
    }
}
export default LinksController