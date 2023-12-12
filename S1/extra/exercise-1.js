const users = [
  { name: "Abel", years: 43 },
  { name: "Maria", years: 18 },
  { name: "Pedro", years: 14 },
  { name: "Samantha", years: 32 },
  { name: "Raquel", years: 16 },
];

for (let index = 0; index < users.length; index++) {
    const usuario = users[index];
   
    if (usuario.years>=18){
        console.log(usuario.name, "es mayor de edad");
    }

    else{
        console.log(usuario.name, "es menor de edad");
    }
}

