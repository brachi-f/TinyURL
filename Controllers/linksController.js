

links = [
    {
        _id: 0,
        originalUrl: ""
    }
]

const LinksController = {
    getLinks: (req, res) => {
        res.send(links)
    },
    getLinkById: (req, res) => {
        let id = req.params._id;
        res.send(links.find(l => l._id == id))
    }
}
export default LinksController