//necesito ir a netflix y autenticar 

function procesoUno(nombreUsuario,procesoDos){//declarando1
    setTimeout(function(){

        if(nombreUsuario=="ADMIN"){
            procesoDos("Exito",null) //llamado a 2
        }else{
            procesoDos(null,"Falla") //llamado a 2
        }

    },2000)

}
procesoUno("ADMIN",function(resuelvo,rechazo){
    if(resuelvo!=null){
        console.log("Bienvenido a netflix")
    }else{
        console.log("revisa tus datos")
    }
})//llamado a 1