
function player_init()
{
    for( i=0;i<PLAYER_NUM; i++)
	{
	    player[i] = new Player("Akira"+i);
	}
}

function kuma_init(){

    kuma.x = 48*11+8;
    kuma.y = 48*11+8;

    kuma.scaleX = 0.9;
    kuma.scaleY = 0.8;
}

function scene_init(){

    //title scene 
    title = new Scene();
    button_t = new Button("モノポリ　スタート",mytheme,320,320);
    button_t.font = '60px serif';
    button_t.moveTo(300,200);    
    title.backgroundColor = "brown";
    title.addChild(button_t);

    //site action scene
    site_scene = new Scene();
    var pink = new Sprite(960,720);
    pink.image = game.assets['960.png'];
    site_scene.addChild(pink); 
    pink.moveTo(0,0);
    pink.opacity = 0.4;       

    site_scene.addChild(turn_mes);
 
    //effect action scene
    effect_scene = new Scene();
    var black = new Sprite(960,720);
    black.image = game.assets['black.png'];
    site_scene.addChild(black);
    black.moveTo(0,0);
    black.opacity = 0.4;
       
    //game root scene 
    game.rootScene.addChild(button);
    game.rootScene.addChild(kuma);
    map.loadData(mapArray);
    game.rootScene.addChild(map);
    game.rootScene.addChild(kuma);

    button.moveTo(800,600);
    button.ontouchstart = but;
    kuma.onenterframe= kuma_mov;
    
    game.pushScene(title);
    button_t.addEventListener("touchend", function(e) { game.popScene(); });   
    
}    
