const userAnwsers = [];

function confirmExample(description){
    
    return description
}

function promptExample(description){
    
    return description
}

function father(description, callback){


userAnwsers.push(callback(description))
}

father('¿eres feliz?', confirmExample);
father('¿Cual es tu fruta favorita?', promptExample);


console.log(userAnwsers);