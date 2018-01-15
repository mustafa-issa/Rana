function ViewModel() {
    var player1, player2;
    var groundImage;
    var deck;
    this.init = function() {
        deck = new Deck();
        player1 = new Player();
        player2 = new Player();
        deck.players = [player1, player2];
        deck.startGame();
        groundImage = $("#ImgCard");
        CardsListener();
    };

    function CardsListener() {
        $("#player1").on("click", onClickPlayer);
        $("#player2").on("click", onClickPlayer);
    }

    function onClickPlayer(e) {
        var index = e.target.getAttribute("data-index");
        groundImage.style.display = "inline";
        var card = deck.setGroundCards(index);
        groundImage.setAttribute("src", card.imgSrc());
    }
}