const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};



for (const datos in alien) {
  if (alien.hasOwnProperty(datos)) {
     const element = alien[datos]
      console.log(`${datos}: ${element}`);
  }
}