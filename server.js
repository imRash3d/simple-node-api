
const express = require('express');
const app = express();
app.use(express.json()); // for json parse 

const connectDB = require('./db-connect');


const produtRoute = require('./router/product');

const PORT = 3000;

app.use(produtRoute);



app.listen(PORT, () => {
    connectDB();
    console.log(`server is running on port : ${PORT}`);
})