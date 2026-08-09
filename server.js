const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'healthy',
        port: PORT
    });
});

app.get('/', (req, res) => {
    res.send('Railway server is working');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on 0.0.0.0:${PORT}`);
});