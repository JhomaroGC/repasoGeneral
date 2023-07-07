
const idTitle = document.getElementById("titulo")
const idGato = document.getElementById("gato")
const arrayExample = document.getElementById("arrayExample")
const lista = document.getElementById("lista")
const funcionFlecha = document.getElementById("funcionFlecha")
const IdInfoDestructurada = document.getElementById("infoDestructurada")
const idGatoAzul = document.getElementById("gatoAzul")
const idGatoVerde = document.getElementById("gatoVerde")

const gato = {
    nombre : "Copito",
    color: "Blaco",
    edad: 9,
    peso: 12.5,
    estado: function(){
        return `${gato.nombre} está dormido`
    }
}

const gatos = ["siamés", "Angora", "abisinio", "Maine coon", "ragdoll", "siberiano", "birmano"]
const copiaObjetoGato = {...gatos}
const objectToString = JSON.stringify(copiaObjetoGato)
const stringToObject = JSON.parse(objectToString)

let text = "<ul>"
for (let i = 0; i < gatos.length;i++) {
    text += "<li>" + gatos[i] + "</li>"
}
text+="</ul>"

const funcionFlechaHola = () => `${gato.nombre}, soy una función flecha que borro todo`


const destructuredGato = (gato)=>{
    return [gato.nombre, gato.color, gato.edad]
}

function destructured(){
    const {nombre, color, edad} = gato
    return [nombre, color, edad]
}

function show(){
    idTitle.style.display = "block"
    idGato.style.display = "block"
    arrayExample.style.display = "block"
}

function hiden() {
    idTitle.style.display = "none"
    idGato.style.display = "none"
    arrayExample.style.display = "none"
}


idGatoAzul.addEventListener("click", ()=> {
    show()
    idTitle.innerHTML = gato.nombre
    idGato.src = "gatoFondoVerde.png"
    arrayExample.innerHTML = text
    IdInfoDestructurada.innerHTML = destructuredGato(gato)[0]

})

idGatoVerde.addEventListener("click", ()=> {
hiden()    
    idTitle.innerHTML = funcionFlechaHola()
    idTitle.style.display = "block"


})


