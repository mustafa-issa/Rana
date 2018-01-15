function Card(name, suit) {
    this.name = name;
    this.suit = suit;
    this.imgSrc = function () {
        return "imgs/" + this.name + "-" + this.suit + ".png";
    };
}

function Deck() {
    var self = this;
    this.cards = [];
    var groundCards = [];
    this.playerTurnIndex = 0;
    this.players = [];
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
    this.distributeCards = function() {
        var numberOfPlayers = this.players.length;
        var numberOfCards = this.cards.length / numberOfPlayers;      
        for(var i=0; i< numberOfPlayers; i++) {
            for (var j = 0; j < numberOfCards; j++) {
                this.players[i].cards.push(this.cards[i * numberOfCards + j]);                
            }
        }  
    };
    this.startGame = function() {
        this.shuffle();    
        this.distributeCards();
    };
    this.setGroundCards = function(index) {
        var player = this.players[index];
        if(index == this.playerTurnIndex) {
            console.log(this.playerTurnIndex);
            var card = player.getCurrentCard();        
            groundCards.push(card);
            this.playerTurnIndex = Math.abs(this.playerTurnIndex - 1);
            return card;
        }
        else {
            return groundCards[groundCards.length - 1];
        }
    };
    this.getGroundCards = function() {
        return groundCards;
    };
    this.setPlayerTurn = function(player) {
        this.playerTurn = player;
    };
}

function Player() {
    this.name = "";
    this.cards = [];
    this.score = 0;
    this.getCurrentCard = function() {
        return this.cards.pop();
    };  
}

function test() {    
    var player1 = new Player();
    var player2 = new Player();
    var players = [];
    player1.name = "Mustafa";
    player2.name = "Rana";
    players.push(player1);
    players.push(player2);    
    console.log(deck.cards);
    deck.distributeCards(players);
    console.log(players);
}