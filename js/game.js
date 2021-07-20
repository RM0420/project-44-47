class Game{
    constructor(){}

    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data){
           gameState = data.val()
        })
    }
    
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }

    async start(){
        if(gameState === 0){
           background(backgroundIMG)
           var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      } 
           form = new Form();
           form.display();
        }
        player1 = createSprite(500, displayHeight/2-50, 25, 25);
        player2 = createSprite(500, displayHeight/2, 25, 25);
        player3 = createSprite(500, displayHeight/2+50, 25, 25);
        player4 = createSprite(displayWidth-500, displayHeight/2-50, 25, 25);
        player5 = createSprite(displayWidth-500, displayHeight/2, 25, 25);
        player6 = createSprite(displayWidth-500, displayHeight/2+50, 25, 25);
        team1 = [player1, player2, player3];
        team2 = [player4, player5, player6];
    }

    play(){
        form.hide();
        Player.playerRef();
        if(allPlayers != undefined){
            background(backgroundIMG2); 
            //give x and y value from database
            if(keyDown("A")){
                writePosition(-1,0);
            }
            else if(keyDown("D")){
                writePosition(1,0);
            }
            else if(keyDown("w")){
                writePosition(0,-1);
            }
            else if(keyDown("S")){
                writePosition(0,+1);
            }
        }
        drawSprites();
    }
}
