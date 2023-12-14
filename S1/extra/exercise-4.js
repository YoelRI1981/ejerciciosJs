const products = [
  { name: "Gorra de rodilla", sellCount: 10 },
  { name: "Pantalón de pana", sellCount: 302 },
  { name: "Reloj de papel albal", sellCount: 23 },
  { name: "Inpar de zapatos", sellCount: 6 },
];

 let totalsellcount = 0

for (let index = 0; index < products.length; index++) {
    const productos = products[index];
    totalsellcount += productos.sellCount

    
    
}

console.log("El total de ventas es de", totalsellcount)