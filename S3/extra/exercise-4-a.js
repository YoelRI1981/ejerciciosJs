const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];


//no esta bien
let div$$ = document.createElement('div') 
for (const pais of countries) {
   
    
    const h4$$ = document.createElement('h4');
   h4$$.textContent = pais.title;


    const img$$ = document.createElement('img');
    img$$.src = pais.imgUrl;
    
    div$$.appendChild(h4$$);
    div$$.appendChild(img$$);
};
   
   document.body.appendChild(div$$)
