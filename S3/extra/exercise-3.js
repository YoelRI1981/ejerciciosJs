const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let div$$ = document.querySelector('[data-function="printHere"]');

let ul$$ = document.createElement("ul");

for (const coche of cars) {
    let li$$ = document.createElement("li");

    li$$.textContent = coche;
    ul$$.appendChild(li$$);

}
div$$.appendChild(ul$$);



