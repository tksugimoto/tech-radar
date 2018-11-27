const express = require('express');
const app = express();

app.use(express.static(__dirname + '/build'));
app.use((req, res) => {
    res.sendFile(__dirname + '/build/index.html');
});

app.listen(3000, '0.0.0.0', () => {
    console.info('server started.');
});
