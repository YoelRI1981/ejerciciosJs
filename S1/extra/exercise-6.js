const goodProducts = [];
const badProducts = [];
const products = [
  { name: "Gorra de rodilla", sellCount: 10 },
  { name: "Pantalón de pana", sellCount: 302 },
  { name: "Reloj de papel albal", sellCount: 23 },
  { name: "Inpar de zapatos", sellCount: 6 },
];

for (let index = 0; index < products.length; index++) {
    const producto = products[index];

    if (producto.sellCount > 20) {
        goodProducts.push(producto);
      } 
      else {
        badProducts.push(producto);
      }
    }
console.log(goodProducts)
console.log(badProducts)