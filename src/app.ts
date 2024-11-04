import { Request, Response } from "express";
import imageRoutes from "./routes/imageRoute";
const express = require('express');

const app = express();

const port: number = 3001;

app.use("/api", imageRoutes);

app.get("/", (req: Request, res: Response) =>{
  res.send("Change to /images");
});


app.listen(port, () =>{
  console.log("Server is running in port" , port);
})
