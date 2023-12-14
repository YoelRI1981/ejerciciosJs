const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let ul$$ = document.createElement("ul");

for (const redSocial of apps){

 let li$$ = document.createElement("li");

    li$$.textContent = redSocial;

    ul$$.appendChild(li$$);
    
}

document.body.appendChild(ul$$);