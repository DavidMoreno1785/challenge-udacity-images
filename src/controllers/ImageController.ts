import { Request, Response } from "express";
import { SharpService } from "../services/SharpService";

export class ImageController{

  async resizeImage(req: Request, res:  Response): Promise<void>{
    const {filename, width, heigth, format} = req.query

    const sharpService = new SharpService().resize(filename as string, Number(width), Number(heigth), format as string);
    console.log("Resultado ~ ImageController ~ resizeImage ~ sharpService:", sharpService);

    res.status(204).send("Imagen creada")
  }
}