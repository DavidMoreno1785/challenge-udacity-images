import { NextFunction, Request, Response } from 'express'

export const validateParameters = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { filename, width, height, format } = req.query

  const validFormats = ['jpg', 'png', 'jpeg', 'webp']

  if (!filename || !width || !height || !format) {
    res
      .status(400)
      .send(
        'Validate the parameters sent, must contain: filename, width, height and format'
      )
  } else if (isNaN(Number(width)) || Number(width) <= 0) {
    res.status(400).send('The property: width, is invalid.')
  } else if (isNaN(Number(height)) || Number(height) <= 0) {
    res.status(400).send('The property: heigth, is invalid.')
  } else if (!validFormats.includes(format as string)) {
    res
      .status(400)
      .send(
        'The property: format, is not valid, only the following formats are accepted: ' +
          validFormats.toString()
      )
  } else {
    next()
  }
}
