const express = require('express');
const app = express();

// Serving static files from the 'public' directory
app.use(express.static(__dirname + '/public'));

// Route for Home.html or root
app.get(['/', '/Home.html'], (req, res) => {
    res.sendFile(__dirname + '/Home.html');
});

// Routes for other HTML files
app.get('/cart.html', (req, res) => {
    res.sendFile(__dirname + '/cart.html');
});

app.get('/email.html', (req, res) => {
    res.sendFile(__dirname + '/email.html');
});

app.get('/Help.html', (req, res) => {
    res.sendFile(__dirname + '/Help.html');
});

app.get('/Login.html', (req, res) => {
    res.sendFile(__dirname + '/Login.html');
});

app.get('/About.html', (req, res) => {
    res.sendFile(__dirname + '/About.html');
});

app.listen(9000, () => {
    console.log('Server is running on port 9000');
});
