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
    clearAllErrors();
    if (isAllDataValid()) {
        var game = getVideoGame();
        var sonicRing = document.getElementById("sonic_ring");
        sonicRing.play();
        displayGame(game);
    }
}
function isAllDataValid() {
    var isValid = true;
    var titleInput = $HTMLinput("title").value;
    if (titleInput == "") {
        isValid = false;
        addErrorMessage("You did not enter a title");
    }
    var priceInput = $HTMLinput("price").value;
    var priceInputFloat = parseFloat(priceInput);
    if (priceInput == "" || isNaN(priceInputFloat)) {
        isValid = false;
        addErrorMessage("Price must be a number");
    }
    var ratingInput = $("rating").value;
    if (ratingInput == "") {
        isValid = false;
        addErrorMessage("You must choose a rating");
    }
    return isValid;
}
function addErrorMessage(errMsg) {
    var errSummary = $HTMLinput("validation_summary");
    var errItem = document.createElement("li");
    errItem.innerText = errMsg;
    errSummary.appendChild(errItem);
}
function getVideoGame() {
    var game = new VideoGame();
    var titleInput = $HTMLinput("title");
    var priceInput = $HTMLinput("price");
    var ratingInput = $HTMLinput("rating");
    var digitalOnlyInput = $HTMLinput("digitalOnly");
    game.title = titleInput.value;
    game.price = parseFloat(priceInput.value);
    game.rating = ratingInput.value;
    game.digitalOnly = digitalOnlyInput.checked;
    console.log(game);
    return game;
}
function displayGame(game) {
    var displayGameDiv = $HTMLinput("displayGame");
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
function clearAllErrors() {
    var errSummary = $HTMLinput("validation_summary");
    errSummary.innerText = "";
}
function $HTMLinput(id) {
    return document.getElementById(id);
}
function $(id) {
    return document.getElementById(id);
}
