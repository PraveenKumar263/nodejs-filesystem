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
