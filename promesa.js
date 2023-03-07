//un callback con cirugia
//una promesa es una funcion asincrona su escritura a traves de 2 callbacks (resolve y reject)

function proceso1(nombreUsuario){
    let promesa= new Promise(function(resuelve,rechazo){
        setTimeout(function(){
            if(nombreUsuario=="ADMIN"){
                resuelve("exito")
            }else{
                rechazo("falla")
            }
        },2000)
    })
    return promesa
}

proceso1("ADMIN")
.then(function(respuesta){console.log(respuesta)})
.catch(function(respuesta){console.log(respuesta)})