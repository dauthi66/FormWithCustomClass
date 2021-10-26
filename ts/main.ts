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

function getVideoGame():VideoGame{
    //create game, populate using form, return.
    let myGame = new VideoGame();
    myGame.title = "Mario";
    myGame.price = 19.99;
    myGame.rating = "E";
    myGame.digitalOnly = true;

    return myGame;
}

function displayGame(game:VideoGame):void{
}
