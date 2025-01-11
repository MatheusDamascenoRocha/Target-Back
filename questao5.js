function inverterString(str) {
    let stringInvertida = ''; 

    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }

    return console.log(stringInvertida);
}
inverterString("Ola mundo")