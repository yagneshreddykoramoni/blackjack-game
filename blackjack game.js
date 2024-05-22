let player={
    name:"yagnesh",
    chips:69
}

let cards = []
let sum=0;
let hasBlackJack=false;
let isAlive=false;
let message=""

let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
let cardsEl=document.getElementById("cards-el");
let playerEl=document.getElementById("player-el");

playerEl.textContent=player.name + ": $" + player.chips;

function getrandomcard(){
    let randomNumber = Math.floor(Math.random()*13) + 1;
    if (randomNumber>10){
        return 10
    }else if(randomNumber===1){
        return 11
    }else{
        return randomNumber
    }
}

function startgame(){
    isAlive=true;
    let firstcard=getrandomcard();
    let secondcard=getrandomcard();
    cards=[firstcard,secondcard];
    sum=firstcard+secondcard;
    rendergame()
}

function rendergame(){
    cardsEl.textContent = "Cards: ";
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i] + " ";
    }
    
    sumEl.textContent="Sum: "+sum;
    if(sum<=20){
        message = "do you want to draw a new card?";
    }else if(sum==21){
        message = "wohoo! you've got a BlackJack!";
        hasBlackJack=true;
    }else{
        message = "You're out of the game!";
        isAlive=false;
    }

    messageEl.textContent=message;
}

function newcard(){
    if(isAlive==true && hasBlackJack==false){
        let card = getrandomcard();
        cards.push(card);
        sum+=card;
        rendergame()
    }
}