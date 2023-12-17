const button$$ = document.querySelector("#btntoclick")

console.log(button$$)

function evento(params) {
    console.log(params);
}

button$$.addEventListener("click", evento)
