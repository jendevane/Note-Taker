const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use(express.static('public'));
const htmlRoutes = require('./routes/htmlRoutes');

app.use('/', htmlRoutes);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});

