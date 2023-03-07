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

async function llamandoAlapromesa(){
    console.log("Estamos marcando...")

    try{
        let respuesta=await proceso1("ADMIN")
        console.log(respuesta)
    }catch(error){
        console.log(respuesta)
    }
}
llamandoAlapromesa()
