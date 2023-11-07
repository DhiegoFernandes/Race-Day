let raceNumber = Math.floor(Math.random() * 1000);

var cedoOuNao = true;
var idade = 19;

if (idade > 18 && cedoOuNao == true){
    raceNumber += 1000;
}

if (idade > 18 && cedoOuNao) {
    console.log("Adultos que se registraram cedo correm às 9h30 \nCorrida:"+raceNumber);
} else if(idade > 18){
    console.log("Adultos que se registraram tarde correm às 11h00 \nCorrida:"+raceNumber);
} else if(idade < 18){
    console.log("Jovens registados correm às 12h30 (independentemente do registro) \nCorrida:"+raceNumber);
} else{
    console.log("Corredor veja a sua mesa de registro.")
}