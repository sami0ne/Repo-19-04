let miArray = [1,2,3,"valor4", "valor5"];
let miArrayDos = [
    {id:1, nombre: "Metropolitana"},
    {id:2, nombre: "Los Lagos"},
];


miArray.push(1500);
miArray.unshift(2000)

//console.log(miArray);
for(const i of miArray){
    //console.log(i);
}

miArrayDos.push({id:3, nombre: "Maule"});

//console.log(miArrayDos);
for(const j of miArrayDos){
    console.log("FOR",j.id, j.nombre);
}

console.log("posicion:", miArrayDos[1]);
console.log(miArrayDos);

console.log("Filtro:", miArrayDos.filter(e => e.id == 1 || e.id == 3)); 
//&& que contenga ambas condiciones y || para tenga ese id pero no necesariamente ambos juntos

function cargarRegion(){
    const select = document.getElementById("cmbRegion");

    for (const i of miArrayDos) {
        const option = document.createElement("option");
        option.value = i.id;
        option.textContent = i.nombre;
        select.appendChild(option);
        
    }
}

function obtenerValor(){
    let valor = document.getElementById("cmbRegion").value;
    console.log("Valor Select:", valor);
}

