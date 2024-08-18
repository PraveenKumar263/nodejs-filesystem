## Node.js Filesystem App

This is a simple Express.js application with two features:

1. **Generate a Text File with a Timestamp:**
   - Creates a new text file in the directory `TimeStamp` with a timestamp in the filename and the content.
   - METHOD: GET
   - Endpoint: `/createTextFiles`

2. **Read All Text Files in a Directory:**
   - Lists all text files in the `TimeStamp` directory.
   - METHOD: GET
   - Endpoint: `/getTextFiles`

## Folder Structure:
- TimeStamp/: Folder to store the generated text files
- index.js: Entry point for the application


## Instructions to use application locally

To install the application, follow these steps:

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm run dev` to start the application


## Postman API Documentation

[text](https://documenter.getpostman.com/view/37599009/2sA3s9C7kd)