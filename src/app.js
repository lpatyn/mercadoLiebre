const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static( './public' ));

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

app.get('/', (req, res) => res.sendFile( path.resolve(__dirname, './views/index.html') ));

app.get('/register', (req, res) => res.sendFile( path.resolve(__dirname, './views/register.html') ));

app.get('/login', (req, res) => res.sendFile( path.resolve(__dirname, './views/login.html') ));
