let randomNumber1 = Math.floor( Math.random() * 6) + 1;

let diceImage1 = "dice" + randomNumber1 + ".png";

let randomImageSource1 = "images/" + diceImage1;

document.querySelector(".img1").setAttribute("src", randomImageSource1)





let randomNumber2 = Math.floor( Math.random() * 6) + 1;

let diceImage2 = "dice" + randomNumber2 + ".png";

let randomImageSource2 = "images/" + diceImage2;

document.querySelector(".img2").setAttribute("src", randomImageSource2)

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}else if( randomNumber1 = randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!"
}