import LinkModel from "../Models/LinkModel.js"

const redirectController = {
    redirect: async (req, res) => {
        const { url } = req.params
        const { ip } = req.body
        try {
            const link = await LinkModel.findById(url)
            link.clicks.push({
                insertedAt: Date.now(),
                ipAddress: ip
            })
            await link.save()
            res.redirect(link.originalURL)
        } catch (e) {
            res.status(400).json({ message: e.message })
        }
    }
}

export default redirectController