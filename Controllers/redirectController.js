import LinkModel from "../Models/LinkModel.js"

const redirectController = {
    redirect: async (req, res) => {
        const { url } = req.params;
        const ipAddress = req.ip;    
        try {
            const link = await LinkModel.findById(url);
            
            link.clicks.push({
                insertedAt: Date.now(),
                ipAddress: ipAddress
            });
    
            if (link.targetName && req.query[link.targetName]) {
                const targetName = req.query[link.targetName];
                const target = link.targetValues.find(target => target.name === targetName);
                if (target) {
                    target.value += 1;
                }
            }
    
            await link.save();
    
            res.redirect(link.originalURL);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    
}

export default redirectController