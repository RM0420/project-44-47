var database, game, form, player, allPlayers, canvas;
var backgroundIMG, backgroundIMG2
var gameState = 0
var playerCount

function preload(){
    backgroundIMG = loadImage("images/backgroundIMG.png");
    backgroundIMG2 = loadImage("images/backgroundIMG2.jpg")
}


function setup(){
    canvas = createCanvas(displayWidth, displayHeight);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}
function draw(){}

function reset(){
    var restart  = database.ref("Players");
    restart.remove();
}

function writePosition(x,y){
    database.ref("Players/player").set({
        'x':position.x + x,
        'y':position.y + y,
    })
}

function readPosition(data){
    position = data.val();
    ball.x = position.x
    ball.y = position.y
}