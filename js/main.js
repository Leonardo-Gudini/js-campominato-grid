let campContainer = document.getElementById("container");

let numberOfBox = 100;

for(let i = 0; i < numberOfBox; i++){

    const numeroBox = casualNumber(1,100)
    const squareBox = addSquareBox(numeroBox)

    campContainer.append(squareBox);
}



function casualNumber (min,max){
    let number = Math.floor(Math.random() * ( max - min + 1)) + min;
    console.log(number);
    return number;
}






function addSquareBox (numero){
    
    let box = document.createElement("div")
    box.classList.add("squareBox")

    box.append(numero);
    return box;
}


