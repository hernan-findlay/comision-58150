

//  let paciente = prompt ("Ingrese nombre y apellido")
//  let dni = prompt ("Escriba su DNI...")
// let turnos = 0


// if ((paciente != "") && (dni != "")){
//     for (turnos; turnos = 10; turnos++ ){
//         let resultado = turnos + 1;
        
        
//     }
        
//     alert("Bienvenido " + paciente +" " + dni+ " " + resultado )
// }else{
//     alert("POR FAVOR COMPLETE LOS DATOS")
// }




//  for (let turnos = 0;turnos<=10;turnos++){
//      if((paciente != "") && (dni != "")){
        
//      let resultado = turnos + 1;
  
//      alert("bienvenido "+paciente+" "+dni+" " +resultado)  }
//  }


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




function vino( nombre , anio , bodega , precio ){

    this.nombre = nombre;
    this.anio = anio;
    this.bodega = bodega;
    this.precio = precio;

}

const vino1 = new vino ("atardedcer1" , 1976 , "Katina");
const vino2 = new vino ("atardecer2" , 1850 , "Katina");
const vino3 = new vino ("atardecer2", 1940 , "Katina");



const vinoteca = [vino1 , vino2, vino3 ]
vinoteca.push (vino)

class bodega{
    
    this.precio = this.precio *1.21;

}