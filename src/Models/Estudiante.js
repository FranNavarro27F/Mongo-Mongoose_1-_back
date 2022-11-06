const { Schema, model } = require("mongoose");

const EstudianteSchema= new Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    activo: {
        type: Boolean,
        default: true
    },
    materias: [
        {
            nota: Number,
            nombre: String,
            comentario: String
        }
    ]
});

//1°parametro= nombre del modelo, 2°parametro= nombre del schema.
module.exports= model("Estudiante", EstudianteSchema);
