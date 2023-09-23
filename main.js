

let paciente = prompt ("Ingrese nombre y apellido")
let dni = prompt ("Escriba su DNI...")
let turnos = 0


if ((paciente != "") && (dni != "")){
    
    
    alert("Bienvenido " + paciente +" " + dni+ " " + resultado )
}else{
    alert("POR FAVOR COMPLETE LOS DATOS")
}

for (turnos; turnos = 10; turnos++ ){
    let resultado = turnos * 1;
    if (resultado >= 10){
        alert("No hay mas turnos")
    }
    
}



