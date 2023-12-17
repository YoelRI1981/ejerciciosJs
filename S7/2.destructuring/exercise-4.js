const car = { name: "Mazda 6", itv: [2015, 2011, 2020] };

const {name, itv} = car;
console.log(name);
console.log(itv);

const [año1, año2, año3] = car.itv;

console.log(año1);
console.log(año2);
console.log(año3);