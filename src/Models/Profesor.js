const { Schema, model }= require("mongoose");

const profesorEsquema= new Schema({
    correo: {
        required: true,
        unique: true,
        type: String
    },
    clave: {
        required: true,
        type: String
    }

});

module.exports= model("Profesor", profesorEsquema)