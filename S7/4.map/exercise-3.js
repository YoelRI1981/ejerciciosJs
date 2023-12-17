const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const ciudades = cities.map(ciudad => {

if (ciudad.isVisited == true) {
    ciudad.name = (ciudad.name+ " " + "visitado")
    
    
}
return ciudad.name;
})

console.log(ciudades);