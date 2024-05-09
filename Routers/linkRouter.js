import express from "express";
import LinksController from "../Controllers/linksController.js";


const LinksRouter = express.Router();

LinksRouter.get('/',LinksController.getLinks)
LinksRouter.get('/:id',LinksController.getLinkById)
LinksRouter.post('/:userId',LinksController.addLink)
LinksRouter.put('/:id',LinksController.updateLink)
LinksRouter.delete('/:userId/:id',LinksController.deleteLink)

export default LinksRouter;
