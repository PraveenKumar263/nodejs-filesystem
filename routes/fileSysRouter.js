// 1. Create a router
const express = require('express');
const fileSysRouter = express.Router();

// Add controller to access methods
const fileSysController = require('../controller/fileSysController');

// 2. Add routes to the router

// Create text file, with time stamp
fileSysRouter.get('/createTextFiles', fileSysController.createTxtFile);

// Get all text files in directory
fileSysRouter.get('/getTextFiles', fileSysController.getAllTxtFiles);

// 3. Export the router
module.exports = fileSysRouter;