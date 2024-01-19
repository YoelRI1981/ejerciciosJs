const main$$ = document.querySelector("main");

const getOrders = async () => {
  const responseO = await fetch(`http://localhost:3000/orders`);
  const resultO = await responseO.json();

  const responseP = await fetch(`http://localhost:3000/products/`);
  const resultP = await responseP.json();

  const dateOrdenado = resultO.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateB - dateA;
  });
  for (const order of resultO) {
    const ulO = document.createElement("ul");
    const liO = document.createElement("li");

    liO.innerHTML = `<h2>Numero de pedido:  ${order.id}</h2><H3>Fecha:  ${order.date}</H3>`;
    ulO.appendChild(liO);
  

    for (const productInfo of order.products) {
      const productId = productInfo.productId;
      const quantity = productInfo.quantity;

      const product = await fetch(
        `http://localhost:3000/products/${productId}`
      );

      const id = await product.json();
      console.log("orderaqui", id);

      const ulP = document.createElement("ul");
      const liP = document.createElement("li");

      liP.innerHTML = `<p>Unidades: ${quantity}</p><p> Nombre de producto: ${id.name}</p>`;

      ulO.appendChild(liP);
     
    };

    main$$.appendChild(ulO);
  };
};

const init = async () => {
  const ordenes = await getOrders();
 
};

init();
