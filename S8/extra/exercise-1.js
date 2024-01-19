const main$$ = document.querySelector("main")


const getCharacters = async () => {

    
const response = await fetch("https://hp-api.onrender.com/api/characters/"
);

const result = await response.json();


//console.log(result);
return result;
    }

    //}
const mapearCharacters = (charactersSinMapear) => {
  const charactersMapeados = charactersSinMapear.map((character)=> ({
nombre: character.name,
foto: character.image,


    }));
    return charactersMapeados;
    console.log(charactersMapeados);
};

const pintarCharacters = (characters) => {
    console.log("pintar", characters);
main$$.innerHTML = "";
for (const character of characters) {
    

let characterdiv$$ = document.createElement("div")
characterdiv$$.innerHTML= `
<h2>${character.nombre}</h2>
<img src ="${character.foto}" alt ="${character.nombre}">`;
main$$.appendChild(characterdiv$$);
}
}
    const init = async  () => {
    const characters = await getCharacters();
const charactersMapeados = mapearCharacters(characters)
pintarCharacters(charactersMapeados);
    }
    init ()


