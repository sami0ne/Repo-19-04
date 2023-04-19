function crear(){
    let array  = [
        {
        nombre: "Juan",
        edad: 25,
        rut: "12.1212.1212-2"
        },
        {
            nombre: "Pedro",
            edad: 27,
            rut: "11.1111.1111-1"
         }
    ];
    const objJson = JSON.stringify(array);
    localStorage.setItem("llaveStorage", objJson);
    console.log("Storage Guardado :3");
}

function eliminar(){
    localStorage.removeItem("llaveStorage");
    
}

function obtener(){
    let storage = localStorage.getItem("llaveStorage");
    const obj = JSON.parse(storage);
    console.log("storage", obj);

    if(obj == null){
        alert("NO hay informacion")
    }else{
        console.log("storage", obj);
    }
}

function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    horaImprimible = hora + " : " + minuto + " : " + segundo

    document.form_reloj.reloj.value = horaImprimible

    setTimeout("mueveReloj()",1000) 
    console.log("Hora Actualizada");
}