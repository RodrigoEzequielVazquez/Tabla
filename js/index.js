const contenedorTabla = document.getElementById("contenedorTabla")
const btnCrearTabla = document.getElementById("btnCrearTabla2")

btnCrearTabla.addEventListener("click", (e) => {
    crearTabla()
})

function crearTabla() {
    const columnas = document.getElementById("columna").value
    const filas = document.getElementById("fila").value

    console.log(columnas, filas);

    if (columnas == "" || isNaN(columnas) || filas == "" || isNaN(filas)) {
        alert("Debe colocar un numero en ambos lugares")
    }
    else {

        if (columnas > 100 || filas > 100) {
            alert("No se puede crear mas de 100 filas o columnas");
        } else {

            let tabla = "<table>"

            for (let i = 1; i <= filas; i++) {
                tabla += "<tr>"

                for (let j = 1; j <= columnas; j++) {
                    tabla += `<td ><input class="inputCasillas"></input></td>`

                }
                tabla += "</tr>"
            }
            tabla += "</table>"

            contenedorTabla.innerHTML = tabla
            let input = `<div><div><button type="button" class="btnsInicio" id="vaciarTabla">Vaciar tabla</button></div></div>`
            contenedorTabla.innerHTML += input

            const btnVaciarTabla = document.getElementById("vaciarTabla")

            btnVaciarTabla.addEventListener("click", (e) => {
                vaciarTabla()
            })
        }
    }
}

function vaciarTabla() {

    let inputs = document.getElementsByClassName("inputCasillas")

    for (const input of inputs) {
        input.value = ""
    }
}




