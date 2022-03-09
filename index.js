// Create the player object. Give it two keys, name and chips, and set their values 
let player = {
    name: "Mihir",
    chips: 200 
}

let cards = [] // array - ordered list of items 
let sum = 0 
let hasBlackJack = false 
let isAlive = false 
let message = ""

// Store the message-el paragraph in a variable called messageEl 
let messageEl = document.getElementById("message-el") 

// Store the sum paragraph in a variable called sumEl 
// let sumEl = document.querySelector("#sum-el") 
let sumEl = document.getElementById("sum-el") 

// Store the cards paragraph in a variable called cardsEl 
let cardsEl = document.getElementById("cards-el")

// Grab ahold of the player-el paragraph and store it in a variable called playerEl 
let playerEl = document.getElementById("player-el") 
// Render the player's name and chips in playerEl 
playerEl.textContent = player.name + ": $" + player.chips  

// Create a function, getRandomCard() 
// Make this function return a random number between 1 and 13 
function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1 // 1 - 13 
    // if 1 --> return 11 
    // if 11-13 --> return 10 
    if(randomNumber > 10){
        return 10
    }else if(randomNumber === 1){
        return 11 
    }else{
        return randomNumber 
    }
}

// Create a new function called startGame() that calls renderGame() 
function startGame(){
    isAlive = true 
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard 
    renderGame()
}

// Create a startGame() function. Move the conditional
// below inside the body of the function.
function renderGame(){
    // render out firstCard and secondCard 
    cardsEl.textContent = "Cards: " 
    // Create a for loop that renders out all the cards instead of just two  
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " " 
    }

    // render out ALL the cards we have 
    sumEl.textContent = "Sum: " + sum 
    if(sum <= 20){
        message = "Do you want to draw a new card?"
    }else if(sum === 21){
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    }else{
        message = "You're out of the game!" 
        isAlive = false
    }

    // Display the message in the messageEl using messageEl.textContent 
    messageEl.textContent = message

}

// Create a function newCard() 
function newCard(){
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack 
    if(isAlive === true && hasBlackJack === false){
        // Create a card variable 
        // Use the getRandomCard() to set the value of card 
        let card = getRandomCard() 
        // Add the new card to the sum variable 
        sum += card 
        // Push the card to the cards array 
        cards.push(card) 
        // Calling renderGame() function 
        renderGame() 
    }
}


console.log("Vivaan Chakma. 2022-03-08")


