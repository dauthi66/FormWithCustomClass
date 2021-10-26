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
    var game = new VideoGame();
    var titleInput = $("title");
    var priceInput = $("price");
    var ratingInput = $("rating");
    var digitalOnlyInput = $("digitalOnly");
    game.title = titleInput.value;
    game.price = parseFloat(priceInput.value);
    game.rating = ratingInput.value;
    game.digitalOnly = digitalOnlyInput.checked;
    console.log(game);
    return game;
}
function displayGame(game) {
}
function $(id) {
    return document.getElementById(id);
}
