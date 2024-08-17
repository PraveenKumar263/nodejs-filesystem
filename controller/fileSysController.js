// Load env var
const { FOLDER_PATH } = require('../utils/config');

// Import file system node module
const fs = require('node:fs/promises');
const path = require('node:path');
const { format } = require('date-fns');

const fileSysController = {
    createTxtFile: async (req, res) => {
        try {
            const timestamp = Date.now();
            
            const fileName = format(new Date(), 'yyyyMMdd-HHmmss');
            const filePath = path.join(FOLDER_PATH, `${fileName}.txt`);
            
            // Check directory exists
            await fs.mkdir(FOLDER_PATH, { recursive: true });
            
            // Write the timestamp to the file
            await fs.writeFile(filePath, `${timestamp}`);
            
            // Read the file content
            const data = await fs.readFile(filePath, 'utf8');
            
            // Send the file content as response
            res.send({ fileName: `${fileName}.txt`, message: data});
        } catch (error) {
            res.send({ message: error.message});
        }
    },
    getAllTxtFiles: async (req, res) => {
        try {
            // Read files in the directory
            const files = await fs.readdir(FOLDER_PATH);
            
            // Filter files with .txt
            const txtFiles = files.filter(file => path.extname(file) === '.txt')
    
            // Send the file content as response
            res.send({ message: `Text files in folder: ${txtFiles}`});
        } catch (error) {
            res.send({ message: error.message});
        }
    }
}

module.exports = fileSysController;