const divclass$$ = document.querySelectorAll(".fn-insert-here");
for (const div of divclass$$) {
  const p$$ = document.createElement("p");
  p$$.textContent = 'Voy dentro!';


div.appendChild(p$$);
}
