import { NextFunction, Request, Response } from "express";
import path from "path";

export const validateParameters = (req: Request, res: Response, next: NextFunction) => {
  const { filename, width, heigth, format } = req.query;

  const validFormats = ["jpg", "png", "jpeg", "webp"]

  if (!filename || !width || !heigth || !format) {
    res.status(400).send("Validate the parameters sent, must contain: filename, width, height and format");
  } else {
    if (Number(width) <= 0 || isNaN(Number(width))) {
      res.status(400).send("The property: width, is invalid.");
    }

    if (Number(heigth) <= 0 || isNaN(Number(heigth))) {
      res.status(400).send("The property: heigth, is invalid.");
    }

    if (!validFormats.includes(format as string)) {
      res.status(400).send("The property: format, is not valid, only the following formats are accepted: " + validFormats.toString());
    }
    next();

  }


}