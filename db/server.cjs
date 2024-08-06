const express = require ('express');

const app = express();

const client = require('./client.cjs');
client.connected();

app.use(express.static());


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));