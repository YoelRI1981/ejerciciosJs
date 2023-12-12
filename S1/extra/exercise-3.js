const peliculaPequeña= [];
const peliculaMediana= [];
const peliculaGrande= [];


const movies = [
  { name: "Your Name", durationInMinutes: 130 },
  { name: "Pesadilla antes de navidad", durationInMinutes: 225 },
  { name: "Origen", durationInMinutes: 165 },
  { name: "El señor de los anillos", durationInMinutes: 967 },
  { name: "Solo en casa", durationInMinutes: 214 },
  { name: "El jardin de las palabras", durationInMinutes: 40 },
];



for (let index = 0; index < movies.length; index++) {
    const pelicula = movies[index];
   
    if (pelicula.durationInMinutes < 100){
        peliculaPequeña.push(pelicula)
       
    }

    else if (pelicula.durationInMinutes >= 100 && pelicula.durationInMinutes < 200) {
        peliculaMediana.push(pelicula)
       
    }

    else {
        peliculaGrande.push(pelicula)
       
    }
}
console.log( peliculaPequeña);
console.log(peliculaMediana);
console.log(peliculaGrande)
