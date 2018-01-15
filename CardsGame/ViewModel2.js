function ViewModel() {
    CalculatorListener();
    var imageCard;
    var numberOfCards1;
    var numberOfCards2;
    var result;
    var play = new PlayGame();

    this.init = function () {
        imageCard = $("#ImgCard");
        numberOfCards1 = $("#numofcards1");
        numberOfCards2 = $("#numofcards2");
        result = $("#result");
        imageCard.style.display = "none";
    };

    this.NumberOfCards = function (CardsOfPlayer1, CardsOfPlayer2) {
        numberOfCards1.innerHTML = CardsOfPlayer1;
        numberOfCards2.innerHTML = CardsOfPlayer2;
    };

    function onClickPlayer1() {
        imageCard.style.display = "inline";
        imageCard.setAttribute("src", play.Player1Click());
    }

    function onClickPlayer2() {
        imageCard.style.display = "inline";
        imageCard.setAttribute("src", play.Player2Click());

    }

    this.Result = function (PlayerName) {
        result.style.display = "block";
        result.innerHTML = PlayerName + " Is The Winner!!!!";
        imageCard.setAttribute("src", "");
    };

    function CalculatorListener() {

        $("#player1").on("click", onClickPlayer1);
        $("#player2").on("click", onClickPlayer2);

    }

}

