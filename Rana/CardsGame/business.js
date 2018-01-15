function Deck() {
    var self = this;
    this.cards = [];
    (function () {
        var names = ["a", "2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k"];
        var suits = ["clubs", "diamonds", "hearts", "spades"];
        for (var i = 0; i < suits.length; i++) {
            for (var j = 0; j < names.length; j++) {
                self.cards.push(new Card(names[j], suits[i]));
            }
        }
    })();

    this.shuffle = function () {
        var j, x, i;
        for (i = this.cards.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = x;
        }
    };
}

function Card(name, suit) {
    this.name = name;
    this.suit = suit;
    this.imgSrc = function () {
        return "imgs/" + this.name + "-" + this.suit + ".png"; //TODO
    };
}


function Player(name) {

    this.name = name;
    this.playerDeck = [];
    this.turn = false;

}

function PlayGame() {

    var player1 = new Player("player1");
    var player2 = new Player("player2");
    var player1Card, player2Card;
    var groundArray = [];
    player1.turn = true;
    
    playerCards(player1.playerDeck, player2.playerDeck);

    function playerCards(player1Cards, player2Cards) {
        var t = new Deck();
        t.shuffle();
        for (var i = 0; i < t.cards.length / 2; i++) {

            player1Cards.push(t.cards[i]);
            player2Cards.push(t.cards[t.cards.length - 1 - i]);

        }


    } //use self invoking function

    this.Player1Click = function () {

        this.Result(); //What for ?
        if (player1.turn) {
            player1Card = player1.playerDeck.pop();
            groundArray.push(player1Card);
            playerGame(player1.playerDeck);
            vm.NumberOfCards(player1.playerDeck.length, player2.playerDeck.length); //you are calling view from here
            player1.turn = false;
            player2.turn = true;
        }
        return player1Card.imgSrc();
    }; //click is an event, and events must place inside viewModel


    this.Player2Click = function () {
        this.Result(); //What for ?
        if (player2.turn) {
            player2Card = player2.playerDeck.pop();
            ImgCard.setAttribute("src", player2Card.imgSrc()); //you are calling view from here
            groundArray.push(player2Card);
            playerGame(player2.playerDeck);
            vm.NumberOfCards(player1.playerDeck.length, player2.playerDeck.length);
            player1.turn = true;
            player2.turn = false;
        }
        return player2Card.imgSrc();
    }; //click is an event, and events must place inside viewModel



    function playerGame(CardsOfplayer) { 

        if (groundArray.length >= 2) {

            if (groundArray[groundArray.length - 2].name == groundArray[groundArray.length - 1].name) {
                for (var i = 0; i < groundArray.length; i++) {
                    CardsOfplayer.push(groundArray[i]);
                }
                groundArray = [];
            }
        }
    } //read about concat function for arrays





    this.Result = function () {

        flag = true;
        if (player1.playerDeck.length == 0) {
            player1.turn = false;
            player2.turn = false;
            vm.NumberOfCards(player1.playerDeck.length, player2.playerDeck.length);  //you are calling view from here
            vm.Result(player2.name);  //you are calling view from here

        }

        if (player2.playerDeck.length == 0) {
            player1.turn = false;
            player2.turn = false;
            vm.NumberOfCards(player1.playerDeck.length, player2.playerDeck.length);  //you are calling view from here
            vm.Result(player1.name);  //you are calling view from here


        }
    };

}
