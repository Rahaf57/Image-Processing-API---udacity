### Scripts
- Install: ```npm install```
- Build: ```npm run build```
- Lint: ```npm run lint```
- prettier: ```npm run prettier```
- Run unit tests: ```npm run test```
- Start server: ```npm run start```

### Usage
The server will listen on port 3000:


#### Endpoint to resize images
http://localhost:3000/resize

Expected query arguments are:
- image_name is Available : type string
  - image_one
  - image_two
  - image_three
  - image_foure
  - image_five
- width: type string
- height : type string

#### Example 1
http://localhost:3000/resize
Will display a message "Please provide image_name, width and height" 

#### Example 2
http://localhost:3000/resize/?image_name=image_one
Will display a message "Please provide image_name, width and height" 

#### Example 3
http://localhost:3000/resize/?image_name=image_one&width=200&height=500
image_one will be resized to 200 * 500 and will be saved in the ./public folder 


### Notes
- The Images are served from `images`.
- The cropped images will be saved in `pubic`.

### Test Unit

#### Endpoin Test :

- When the name of the image is typed incorrectly, the code 404 will be returned, which means that it does not exist.

- When the image width & Height & image name `" all or one of them"` is not entered, an error message " 'Please provide image_name, width and height' " will be displayed.

#### Function Test :

- The function is true when the image is given ( name, length and width)



