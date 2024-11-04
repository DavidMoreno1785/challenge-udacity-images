import { Request, Response } from "express";
import { SharpService } from "../services/SharpService";
import path from "path";

export class ImageController{

  async resizeImage(req: Request, res:  Response): Promise<void>{
    const {filename, width, heigth, format} = req.query

    await new SharpService().resize(filename as string, Number(width), Number(heigth), format as string);    

    const image = path.resolve(`images/thumb/${filename}-${width}-${heigth}.${format}`);
    res.status(200).sendFile(image);
  }
}