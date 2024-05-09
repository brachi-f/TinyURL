import LinkModel from '../Models/LinkModel.js'


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
        const { id } = req.params
        try {
            const newLink = await LinkModel.create({ originalURL })
            const user = await User.findById(id);
            user.links.push(newLink.id);
            await user.save();
            res.json(newLink)
        } catch (e) {
            res.status(400).json({ message: e.message })
        }

    },
    updateLink: async (req, res) => {
        try {

        } catch (e) {
            res.status(400).json({ message: e.message })
        }

    },
    deleteLink: async (req, res) => {
        try {

        } catch (e) {
            res.status(400).json({ message: e.message })
        }

    }
}
export default LinksController