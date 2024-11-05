import supertest from "supertest";
import app from "../app";


const request = supertest(app);

describe('Test endpoint responses', () =>{

  it('get the api endpoint', async () =>{
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
})


describe('Controller Testing', () =>{

  it("A missing query parameter should return status code 400", async (): Promise<void> => {
    const response = await request.get('/api/images?filename=palmtunnel&width=200&heigth=200');
    expect(response.status).toBe(400);
  })
  
  it("If the parameter is not sent: filename it must return status code 400", async (): Promise<void> => {
    const response = await request.get('/api/images?width=200&heigth=200&format=jpg');
    expect(response.status).toBe(400);
  })

  it("If the parameter is not sent: width it must return status code 400", async (): Promise<void> => {
    const response = await request.get('/api/images?filename=palmtunnel&heigth=200&format=jpg');
    expect(response.status).toBe(400);
  })

  it("If the parameter is not sent: heigth it must return status code 400", async (): Promise<void> => {
    const response = await request.get('/api/images?filename=palmtunnel&width=200&format=jpg');
    expect(response.status).toBe(400);
  })

  it("If the parameter is not sent: format it must return status code 400", async (): Promise<void> => {
    const response = await request.get('/api/images?filename=palmtunnel&width=200&heigth=200');
    expect(response.status).toBe(400);
  })

  it("If the parameter is sent: width with an invalid value, it must return status code 400", async (): Promise<void> => {
    const response = await request.get('/api/images?filename=palmtunnel&width=a0&heigth=200&format=jpg');
    expect(response.status).toBe(400);
  })

  it("If the parameter is sent: heigth with an invalid value, it must return status code 400", async (): Promise<void> => {
    const response = await request.get('/api/images?filename=palmtunnel&width=400&heigth=a0&format=jpg');
    expect(response.status).toBe(400);
  })

  it("If the parameter is sent: formater with an invalid value, it must return status code 400", async (): Promise<void> => {
    const response = await request.get('/api/images?filename=palmtunnel&width=400&heigth=400&format=gif');
    expect(response.status).toBe(400);
  })

})


describe("Validate Images", () =>{
  it("If valid parameters are sent, an image should be created", async (): Promise<void> => {
    const response = await request.get('/api/images?filename=palmtunnel&width=500&heigth=500&format=jpg');
    expect(response.status).toBe(201);
  })

  it("If valid parameters are sent, an image must be returned", async (): Promise<void> => {
    const response = await request.get('/api/images?filename=palmtunnel&width=400&heigth=400&format=jpg');
    expect(response.status).toBe(200);
  })
})