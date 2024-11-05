# IMAGE PROCESSING API PROJECT

-   this project uses the external _sharp library_ to resize images via url parameters

## how to launch the project

-   run `npm install`
-   run `npm start`

-   type into the address bar:
    - http://localhost:3001/api/images?filename=imageJpeg&width=500&height=500&format=jpeg
    - http://localhost:3001/api/images?filename=imageJpg&width=300&height=300&format=jpg
    - http://localhost:3001/api/images?filename=imageWebp&width=800&height=800&format=webp
    - http://localhost:3001/api/images?filename=palmtunnel&width=500&height=500&format=jpg


-   you can choose a _width_ and _height_
-   you can add your own images to the folder 'images/full' to resize them as well
-   resized images are saved in 'images/thumb' and shown in the browser

## scripts

-   `npm install` => install all dependencies
-   `npm start` => start the local server
-   `npm run build` => transpile typescript to javascript
-   `npm run test` => run the tests