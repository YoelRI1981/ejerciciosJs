 const planets$$ = document.querySelector(`[data-function="planets"]`) 
 
 const characters$$ = document.querySelector(`[data-function="characters"]`) 
 

const getPlanets = async () => {
const responseP = await fetch(`http://localhost:3000/planets`);
    const resultP = await responseP.json();
return resultP
}
const pintarPlanets = (planets) => {
    console.log("pintar", planets);

    for (const planeta of planets) {

        const ulP = document.createElement('ul')
        const liP = document.createElement('li')
  liP.innerHTML = `<h2>Planeta: ${planeta.name}</h2> <img src = ${planeta.image} alt= Planeta: ${planeta.name}> `

    ulP.appendChild(liP);
    planets$$.appendChild(ulP);
};
};

const getCharacters = async() => {
    const responseC = await fetch(`http://localhost:3000/characters`);
    const resultC = await responseC.json();
    return resultC
}
const pintarcharacters = async () => {
for (const planetsId of planeta.id) {
    const idP = planetsId.id;
    const name = planetsId.name;
    const avatar = planetsId.avatar
console.log();
    const product = await fetch(
      `http://localhost:3000/planets/${id}`
    );

    const id = await product.json();
    console.log("orderaqui", id);

    const ulP = document.createElement("ul");
    const liP = document.createElement("li");

    liP.innerHTML = `<p>Unidades: ${quantity}</p><p> Nombre de producto: ${id.name}</p>`;

    ulO.appendChild(liP);
    }   
  };





/*const pintarcharacters = (characters) => {
  

    for (const personaje of characters) {

        const ulP = document.createElement('ul')
        const liP = document.createElement('li')
  liP.innerHTML = `<h2>Nombre: ${personaje.name}</h2> <img src = ${personaje.avatar} alt= Nombre: ${personaje.name}> `

    ulP.appendChild(liP);
    characters$$.appendChild(ulP);


}


}*/

const init = async () => {
const global = await getPlanets();

pintarPlanets(global);
const global2 = await getCharacters();
   pintarcharacters(global2); 
   console.log("global2", global2);
}
init (); 


