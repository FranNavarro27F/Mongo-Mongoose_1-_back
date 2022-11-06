const guardarArchivo= async (files, nombreArchivo, tipoArchivo)=>{

    const archivo= files[nombreArchivo];
    const resp= {isOk: false, error: null, nuevoNombre: null};
    console.log(archivo);

    if(archivo.mimetype == "application/pdf"){
        resp.isOk= false;
        return resp;
    }else{
        resp.error= "Formato de archivo incorrecto";
        return resp;
    }
};


module.exports= guardarArchivo;