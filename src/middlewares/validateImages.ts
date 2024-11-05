import { NextFunction, Request, Response } from "express";
import path from "path";
import fs from "fs"
export const validateImages = async (req: Request, res: Response, next: NextFunction) =>{

  const { filename, width, heigth, format } = req.query;
  const originalPath = path.resolve(`images/full/${filename}.${format}`);
  const finalPath = path.resolve(`images/thumb/${filename}-${width}-${heigth}.${format}`);
  const image =  fs.existsSync(originalPath);
  if(image){
    const imageFormated = fs.existsSync(finalPath);
    if(imageFormated){
      res.status(200).sendFile(finalPath);
    }else{
      next();
    }
  }else{
    res.status(404).send("Image not found")
  }
  

}