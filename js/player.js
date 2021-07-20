class Player{
    constructor(){}

    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value", function(data){
           playerCount = data.val()
        }) 
    } 
     
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }

    
 
    update(){
        var playerIndex = "Players/player"+playerCount
        database.ref(playerIndex).set({
            name:this.answer,
            //score:this.score
        });
    }

    static playerRef(){
        var playerIndexInfo = database.ref("Players");
        playerIndexInfo.on("value",readPosition, (data)=>{
            allPlayers = data.val();
        })
    }
}