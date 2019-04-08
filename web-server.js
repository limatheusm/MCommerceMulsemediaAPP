const express = require('express');
const path = require('path');
const server = express();
const port = process.env.PORT || 5000;

server.use(express.static(path.join(__dirname, './public')));
server.listen(port, () => console.log(`The server is running on http://localhost:${port}`));
