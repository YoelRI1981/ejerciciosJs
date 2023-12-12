let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
globalBasePrice=25000
car1.finalPrice=globalBasePrice+car1.basePrice
car2.finalPrice=globalBasePrice+car2.basePrice
console.log("price 1:",car1.finalPrice)
console.log("price 2:", car2.finalPrice)
console.log(car1)
console.log(car2)

