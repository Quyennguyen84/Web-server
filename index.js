// Write a message to the console.
const express = require('express');
const app = express();
app.use(express.static('public'));
app.listen(2000, function()
{
    console.log('Server started at http://localhost:%s', 2000);
});