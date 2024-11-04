import { Request, Response } from "express";

const express = require('express');

const app = express();

const port: number = 3001;



app.get("/image", (req: Request, res: Response) =>{
  res.send("Endpoint Image");
});


app.listen(port, () =>{
  console.log("Server is running in port" , port);
})
