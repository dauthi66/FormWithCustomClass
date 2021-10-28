//A video game object
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

/**
 * if input is valid, displays added a video game to user and plays sound
 */
function addVideoGame():void{
    //log in cosnole button was pressed and function called
    console.log("addVideoGame called");

    clearAllErrors();

    if(isAllDataValid()){
        let game = getVideoGame();
        //set sound as audio element and play
        let sonicRing = <HTMLAudioElement>document.getElementById("sonic_ring");
        sonicRing.play();

        displayGame(game);
    }
}

/**
 * 
 * @returns whether all input is valid, if any is false calls for an error message to be created
 */
function isAllDataValid():boolean{
    let isValid = true;

    let titleInput = $HTMLinput("title").value;
    if (titleInput == ""){

        isValid = false;

        addErrorMessage("You did not enter a title");
    }
    let priceInput = $HTMLinput("price").value;
    //convert input to float
    let priceInputFloat = parseFloat(priceInput);
    
    //if the string is blank or if the parsed value is not a number
    if(priceInput == "" ||  isNaN(priceInputFloat)){
        isValid = false;

        addErrorMessage("Price must be a number");
    }
    //if game rating is not chosen
    let ratingInput = (<HTMLOptionElement>$("rating")).value;
    if (ratingInput == "") {
        isValid = false;
        addErrorMessage("You must choose a rating");
    }

    return isValid;
}

/**
 * appends a li with an error message above search menu
 * @param  errMsg Error message given to user when input is invalid
 */
function addErrorMessage(errMsg:string):void {
    let errSummary = $HTMLinput("validation_summary");
    let errItem = document.createElement("li");

    errItem.innerText = errMsg;
    errSummary.appendChild(errItem);
}

/**
 * Gathers information from form to populate VideoGame
 * @returns a VideoGame object
 */
function getVideoGame():VideoGame{

    //create game, populate using form, return.
    let game = new VideoGame();

    let titleInput = <HTMLInputElement>$HTMLinput("title");
    let priceInput = <HTMLInputElement>$HTMLinput("price");
    let ratingInput = <HTMLInputElement>$HTMLinput("rating");
    let digitalOnlyInput = <HTMLInputElement>$HTMLinput("digitalOnly");

    game.title = titleInput.value;
    game.price = parseFloat(priceInput.value);
    game.rating = ratingInput.value;
    //.checked is a boolean for check inputs
    game.digitalOnly = digitalOnlyInput.checked;

    console.log(game);
    return game;
}
/**
 * Takes a VideoGame object and displays it in a fieldset (cart).
 * @param game VideoGame object
 */
function displayGame(game:VideoGame):void{
    //find div to insert games.
    let displayGameDiv = $HTMLinput("displayGame");

    //create fieldset, legend(heading), h3 (game title), and p for description
    let cart = document.createElement("fieldset");
    let cartHeading = document.createElement("legend");
    let gameHeading = document.createElement("h3");
    let gameInfo = document.createElement("p");

    //give headings to cart and list game title
    cartHeading.innerText = `****Game Added***`;
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

/**
 * clears all errors in validation_summary
 */
function clearAllErrors():void{
    let errSummary = $HTMLinput("validation_summary");
    errSummary.innerText = "";
}



//refactor cast and get by id.
function $HTMLinput(id):HTMLInputElement {
    return <HTMLInputElement>document.getElementById(id);
}

//refactor cast and get by id.
function $(id):HTMLElement {
    return document.getElementById(id);
}