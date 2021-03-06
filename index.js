const express = require('express');
const bodyParser = require('body-parser');
const { promisify } = require('util');

const app = express();
app.use(bodyParser.json());

// setting up server
const startServer = async () => {
    const port = process.env.PORT || 3000;
    await promisify(app.listen).bind(app)(port);
    console.log(`server listening on port ${port}`);
}

startServer();