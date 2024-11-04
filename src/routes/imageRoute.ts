import { Request, Response, Router } from "express";
import { ImageController } from "../controllers/ImageController";

const imageController = new ImageController();
const imageRoutes = Router();

imageRoutes.get("/images", (req: Request, res: Response) => imageController.resizeImage(req, res));

export default imageRoutes;