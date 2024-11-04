import path from "path";
import sharp, { OutputInfo } from "sharp";

export class SharpService {
  async resize( fileName: string, width: number, heigth:number, format: string) : Promise<OutputInfo | undefined> {
    try{
      const originalPath = path.resolve(`images/full/${fileName}.${format}`);
      const finalPath = path.resolve(`images/thumb/${fileName}-${width}-${heigth}.${format}`);

      return await sharp(originalPath).resize(width, heigth).toFile(finalPath);
    }catch(error){
      console.log("Error: ", error);
    }
  }
}