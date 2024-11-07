import { Request, Response } from 'express'
import imageRoutes from './routes/imageRoute'
import { validateParameters } from './middlewares/validateParameters'
import { validateImages } from './middlewares/validateImages'
import express from 'express'

const app = express()

const port: number = 3001

app.use('/api', validateParameters, validateImages, imageRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Change to /api/images')
})

app.listen(port, () => {
  console.log('Server is running in port', port)
})

export default app
