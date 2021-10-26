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
    
}

function $(id):HTMLElement {
    return document.getElementById(id);
}