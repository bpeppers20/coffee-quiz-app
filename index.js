// Use Express Module
const express = require('express');
const app = express();
const path = require('path');
// serve up production assets with middle wear
app.use(express.static('client/build'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

// if not in production use the port 5000
const PORT = process.env.PORT || 3000;
console.log(`App Avaiable on http://localhost:${PORT}`);
app.listen(PORT);
