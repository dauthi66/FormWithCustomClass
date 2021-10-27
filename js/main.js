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
    var displayGameDiv = $("displayGame");
    var cart = document.createElement("fieldset");
    var cartHeading = document.createElement("legend");
    var gameHeading = document.createElement("h3");
    var gameInfo = document.createElement("p");
    cartHeading.innerText = "****Game Added***";
    gameHeading.innerText = game.title;
    var isNotDigital = "";
    if (!game.digitalOnly) {
        isNotDigital = "not";
    }
    gameInfo.innerText = "Price - $" + game.price.toFixed(2) + "\n \n                          Rating: " + game.rating + "\n\n                          This game is " + isNotDigital + " digital";
    displayGameDiv.appendChild(cart);
    cart.appendChild(cartHeading);
    cart.appendChild(gameHeading);
    cart.appendChild(gameInfo);
}
function $(id) {
    return document.getElementById(id);
}
