const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const nombres = users.map(nombre => {

if (nombre.name.includes("A")){
nombre.name = "Anacleto"

}
return nombre.name;
});

console.log(nombres);
