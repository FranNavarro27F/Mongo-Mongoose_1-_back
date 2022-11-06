const mongoose = require('mongoose');

const cnexionDB= async ()=>{
    try {
       const DB= await mongoose.connect('mongodb://localhost:27017/test-estudiantes', {useNewUrlParser: true, useUnifiedTopology: true});
       console.log("Conexion de forma satisfactoria, DB.connection.name")
    } catch (e) {
        console.log(e)
    }
};

module.exports= cnexionDB;

