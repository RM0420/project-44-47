class Form{
    constructor(){
        this.title = createElement("h2");
        this.PlayerName = createInput("Name");
        this.button = createButton("PLAY");
        this.greeting = createElement("h3");
        this.reset = createButton("RESET");
    }
    display(){
        this.title.html("Basketball Game");
        this.title.position(displayWidth/2-100, 0); 
        this.PlayerName.position(displayWidth/2-75, displayHeight/2-25);
        this.button.position(displayWidth/2+25, displayHeight/2+10);
        this.reset.position(displayWidth-200, 25);
        this.button.mousePressed(()=>{
            this.PlayerName.hide();
            this.button.hide();
            player.answer = this.PlayerName.value();
            playerCount += 1;
            player.update();
            player.updateCount(playerCount)
            this.greeting.html("hello " + player.answer);
            this.greeting.position(displayWidth/2-75, displayHeight/2-25);
        });
        this.reset.mousePressed(()=>{
            game.update(0);
            player.updateCount(0);
            reset();
        });
    }
}