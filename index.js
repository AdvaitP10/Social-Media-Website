const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const port = process.env.PORT || 3000;

const server = http.createServer(app);

mongoose.connect("mongodb+srv://advaitpatole10:Advait%40253@cluster0.3ltpsez.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    server.listen(port, ()=>{
        console.log("server started");
    });
})
.catch((error)=>{
    console.log(error);
})


