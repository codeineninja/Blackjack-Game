
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1
    if(randomNumber > 10){
        return 10
    } else if (randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
    return isAlive
}

function renderGame(){
    cardEl.textContent = "Cards : "
    for(let i=0 ; i<cards.length ; i++ ){
        cardEl.textContent += cards[i] +" "
    }
    sumEl.textContent = "Sum : "+sum
    if(sum <= 20){
        message = "Do you want to draw a new card?"
    } else if (sum === 21){
        message = "You've got a Blackjack!"
        hasBlackjack = true
    } else {
        message = "You are out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackjack == false){
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
}