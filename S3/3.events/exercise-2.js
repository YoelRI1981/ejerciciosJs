const input$$ = document.querySelector("input");

function valor(params) {
    console.log(params.target.value);
    


} 

input$$.addEventListener("focus" , valor)



