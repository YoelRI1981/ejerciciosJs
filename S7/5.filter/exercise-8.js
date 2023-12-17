const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const input$$ = document.querySelector('input[data-function="toFilterStreamers"]');

const button$$ = document.querySelector('button[data-function="toShowFilterStreamers"]');

   
    button$$.addEventListener('click', function() {
      
      const valor = input$$.value.toLowerCase();

     
      const buscados = streamers.filter(streamer => streamer.name.toLowerCase().includes(valor));

     
      console.log(buscados);
    });
    