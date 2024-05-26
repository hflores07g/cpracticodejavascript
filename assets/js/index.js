var h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.querySelector("#aid");
const input1 =document.querySelector("#calculo1");
const input2 =document.querySelector("#calculo2");
const btn =document.querySelector("#btnCalcular");
const pResult= document.querySelector(".result");
function btnOnclick() {
   const sumaInputs = (+input1.value + +input2.value);
   pResult.innerText="Resultado: "+ sumaInputs;
}


console.log({
    h1,
    p,
    parrafito,
    pid,
    input1,

});

// h1.getAttribute()
// h1.getAttribute("ejemplo");
// h1.setAttribute()
// h1.classList.remove("rojo");

h1.innerHTML = "Manipulación del DOM fundamental";
h1.getAttribute("class");
h1.setAttribute("class", "rojo");
h1.classList.add("negro");

//crear elementos html e insertarlos desde javascript

const imagen =document.createElement('img');
imagen.setAttribute('src', './assets/img/clon.png');
pid.append(imagen);



