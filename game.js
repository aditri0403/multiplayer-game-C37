class Game {
    constructor(){}
    getState(){
        var gsref = database.ref("gamestate");
        gsref.on("value",function(data){
            gamestate = data.val();
        });
    }

    update(state){
        database.ref("/").update({
           gamestate: state 
        })
    }

    async start(){
        if(gamestate === 0){
            player = new Player();
            var pcref = await database.ref("playercount").once("value");
            if(pcref.exists()){
                playercount = pcref.val();
                player.getcount();
            }
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        cars = [car1,car2,car3,car4]
    }

    play(){
        form.hide();
        textSize(30);
        text("LET'S START",150,100);
        Player.getplayerinfo();
        if(allplayers !== undefined){
            //var display_pos=120;
            var index = 0;
            var x = 0;
            var y;
            for(var plr in allplayers){
                index = index + 1;
                x = x+200;
                y = displayHeight - allplayers[plr].distance;
                cars[index - 1].x = x;
                cars[index - 1].y = y;
                if(index===player.index){
                    cars[index -1].shapeColor = "yellow";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index - 1].y;
                }
            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance+=50;
            player.update();
        }
        drawSprites();
    }
};