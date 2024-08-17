// Import express module
const express = require('express');

// Create an express application
const app = express();

// Load env var
const { PORT } = require('./utils/config');

// Router
const fileSysRoute = require('./routes/fileSysRouter');

app.use('/', fileSysRoute);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
