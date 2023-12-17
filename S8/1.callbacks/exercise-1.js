const numbersList = [];

function sum (a, b) {
    return a + b;
}




function substract (a, b){
    return a - b;
}


function father(a, b, opera){
    const resultado = opera(a,b);
    numbersList.push(resultado)
}
father(7,2, substract); 
father(7,2, sum); 
father(9,8, substract); 
father(4,9, sum); 



console.log(numbersList);

