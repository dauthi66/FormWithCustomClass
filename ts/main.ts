class VideoGame{
    title:string;
    price:number;
    rating:string;
    digitalOnly:boolean;
}


window.onload = function(){
    let addBtn = <HTMLInputElement>document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
}

function addVideoGame():void{
    console.log("addVideoGame called");

    if(isAllDataValid()){
        let game = getVideoGame();
        displayGame(game);
    }
}

function isAllDataValid():boolean{
    return true;
}

/**
 * Gathers information for form to populate VideoGame
 * @returns a VideoGame object
 */
function getVideoGame():VideoGame{
    //create game, populate using form, return.
    let game = new VideoGame();

    let titleInput = <HTMLInputElement>$("title");
    let priceInput = <HTMLInputElement>$("price");
    let ratingInput = <HTMLInputElement>$("rating");
    let digitalOnlyInput = <HTMLInputElement>$("digitalOnly");

    game.title = titleInput.value;
    game.price = parseFloat(priceInput.value);
    game.rating = ratingInput.value;
    //.checked is a boolean for check inputs
    game.digitalOnly = digitalOnlyInput.checked;

    console.log(game);
    return game;
}


function displayGame(game:VideoGame):void{
    //find div to insert games.
    let displayGameDiv = $("displayGame");

    //create fieldset, legend(heading), h3 (game title), and p for description
    let cart = document.createElement("fieldset");
    let cartHeading = document.createElement("legend");
    let gameHeading = document.createElement("h3");
    let gameInfo = document.createElement("p");

    //give headings to cart and list game title
    cartHeading.innerText = "****Game Added***";
    gameHeading.innerText = game.title;
    
    //report if game is digital
    let isNotDigital = "";
    if(!game.digitalOnly){
        isNotDigital = "not";
    }
                            //to fixed to round to nearest cent
    gameInfo.innerText = `Price - $${game.price.toFixed(2)}\n 
                          Rating: ${game.rating}\n
                          This game is ${isNotDigital} digital`

    //append a child (the game information) to the div
    displayGameDiv.appendChild(cart);
    cart.appendChild(cartHeading);
    cart.appendChild(gameHeading);
    cart.appendChild(gameInfo);
}

function $(id):HTMLElement {
    return document.getElementById(id);
}