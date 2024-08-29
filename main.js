let array = ["Html", "Css", "Js"]

for(let i = 1; i < Infinity; i++){

    let word = prompt("Введите команду")
    let command = word.split  (", ")

    if(word == "stop"){
        break
    }else if(command[0] == "add"){
        array.push(command[1])
    }else if(command[0] == "del"){
        for(let x = 0; x < array.length;x++){
            array[x] == command[1] ? array.splice(x,1) : ""
        }
    }
    console.log(array);
}

