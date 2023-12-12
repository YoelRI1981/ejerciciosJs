const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Abel Cabeza", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

let cuentaNotas = 0;

for (let index = 0; index < alumns.length; index++) {
    const alumno = alumns[index];

  if (alumno.T1) {
   
    cuentaNotas++;
  
  }

  if (alumno.T2) {
 
    cuentaNotas++;
  }

  if (alumno.T3) {
 
   cuentaNotas++;
  }

  alumno.isApproved = cuentaNotas >= 2 ;
  cuentaNotas=0;
}

console.log(alumns);
