var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
};
function addVideoGame() {
    console.log("addVideoGame called");
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function isAllDataValid() {
    return true;
}
function getVideoGame() {
    var myGame = new VideoGame();
    myGame.title = "Mario";
    myGame.price = 19.99;
    myGame.rating = "E";
    myGame.digitalOnly = true;
    return myGame;
}
function displayGame(game) {
}
