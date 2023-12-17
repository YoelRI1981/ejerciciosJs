const input$$ = document.querySelector("input")

function evento(params) {
    console.log(params.target.value);
}

input$$.addEventListener("input", evento)