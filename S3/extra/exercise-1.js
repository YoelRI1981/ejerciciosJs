const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

let ul$$ = document.createElement("ul")

for (const pais of countries) {
    let li$$ = document.createElement("li")
    li$$.textContent = pais
    ul$$.appendChild(li$$)
}
document.body.appendChild(ul$$)
