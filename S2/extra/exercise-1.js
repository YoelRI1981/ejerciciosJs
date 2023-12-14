const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

const categorias =[]

for (const pelicula of movies) {
   for (const categoria of pelicula.categories) {
     
    if (!categorias.includes(categoria)) {
        categorias.push(categoria)
     }
   }
   
}
console.log(categorias)



