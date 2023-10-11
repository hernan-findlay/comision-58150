
                                            /* PRIMER ENTREGA

let paciente = prompt("Ingrese su nombre...")
let dni = parseInt(prompt("Ingrese su DNI..."))

function saludo() {
    if((paciente != "") && (dni != "")){
        alert("bienvenido "+paciente+" "+dni)  
    }
    
    else {
        alert("Complete los datos...")
        
    }
    
      
}  
saludo()

let tipo = prompt("Escriba que profesional: Medico/Cirujano/Obstetra")

while (tipo != "" ){

                
        switch (tipo){
            case "Medico":
                alert("El medico atiende de: \n  L a V de 07hs a 12hs")
               break;

                
            case "Obstetra":
                alert("El medico atiende de: \n  Martes a Viernes de 12hs a 18hs")
                break;
            case "Cirujano":
                alert("El medico atiende de: \n  Miercoles a Viernes de 18hs a 22hs")
                break;
            
            default:
                if(tipo != " "){
                alert("No tenemos especialistas")
                }
                
                   
        }
        
        
       
    paciente = prompt("Ingrese su nombre...");
    dni = parseInt(prompt("Ingrese su DNI..."));
    tipo = prompt("Escriba que profesional: Medico/Cirujano/Obstetra");
    saludo();
        
        
    }




 */
/* 
                                                








                                                        SEGUNDA ENTREGA */




const vino = function (nombre, anio, bodega, precio) {

        this.nombre = nombre.toUpperCase();
        this.anio = parseInt(anio);
        this.bodega = bodega.toUpperCase();
        this.precio = parseInt(precio);

    }



const vino1 = new vino ("atardecer1" , 1976 , "Katina", "$1500")
let vino2 = new vino ("atardecer2" , 1850 , "Katina", "$1600")
let vino3 = new vino ("atardecer3", 1940 , "Katina", "$1700")
let vino4 = new vino ("atardecer4", 1975 , "Katina", "$1300")
let vino5 = new vino ("atardecer5", 1970 , "Katina", "$1500")
let vino6 = new vino ("atardecer6", 1930 , "Katina", "$1900")



let vinoteca = [vino1,vino2,vino3,vino4,vino5,vino6]



function cliente(){
    let pedido = prompt("Que vino desea?").toUpperCase()
    let canti = parseInt(prompt("Cuantos quiere?"))
    const tenemos = vinoteca.some(
        (x)=>x.nombre===pedido.toUpperCase()
        
    )

    if ( tenemos === true){
        console.log("Tenemos")
    }else{
        console.log("No tenemos")
    }

   

}

cliente();


