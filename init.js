
function player_init()
{
    for( i=0;i<PLAYER_NUM; i++)
	{
	    player[i] = new Player("Akira"+i);
	    player[i].image = game.assets['images/chara1.png'];
	}
}

function kuma_init(){
    kuma.image = game.assets['images/chara1.png'];
    kuma.x = 48*11+8;
    kuma.y = 48*11+8;

    kuma.scaleX = 0.9;
    kuma.scaleY = 0.8;
    game.rootScene.addChild(kuma);
}

function scene_init(){

    //title scene 
    title = new Scene();
    button_t = new Button("モノポリ　スタート",mytheme,320,320);
    button_t.font = '60px serif';
    button_t.moveTo(300,200);    
    title.backgroundColor = "brown";
    title.addChild(button_t);

    //dice scene
    dice_scene = new Scene();
    //    dice_scene.addChild(button);
    game.rootScene.addChild(button);
    button.moveTo(800,600);
    button.ontouchstart = dice;    
    
    //site action scene
    site_scene = new Scene();
    var pink = new Sprite(960,720);
    message_site = new BaseMessageWindow(MESSAGE_WINDOW_SIZE_X,MESSAGE_WINDOW_SIZE_Y, 200,100);
    pink.image = game.assets['960.png'];
    site_scene.addChild(pink); 
    pink.moveTo(0,0);
    pink.opacity = 0.7;       
    site_scene.addChild(turn_mes);
    
    //effect action scene
    effect_scene = new Scene();
    var black = new Sprite(960,720);
    black.image = game.assets['black.png'];
    effect_scene.addChild(black);
    black.moveTo(0,0);
    black.opacity = 0.4;
       
    //game root scene     
    turn_num = 0;    
    //player[0].onenterframe= mono;
    //player[0].onenterframe= kuma_mov;
    
    game.pushScene(title);
    button_t.addEventListener("touchend", function(e) { 
	    treat = true;
	    game.popScene();
	});   
    
}    
function map_init(){
    map.image = game.assets['444.png'];
    mapArray=[
	      [,,,,,,,,,,,,],
	      [,0,1,2,3,4,5,6,7,8,9,10],
	      [,11,12,13,14,15,16,17,18,19,20,21],
	      [,22,23,24,25,26,27,28,29,30,31,32],
	      [,33,34,35,36,37,38,39,40,41,42,43],
	      [,44,45,46,47,48,49,50,51,52,53,54],
	      [,55,56,57,58,59,60,61,62,63,64,65],
	      [,66,67,68,69,70,71,72,73,74,75,76],
	      [,77,78,79,80,81,82,83,84,85,86,87],
	      [,88,89,90,91,92,93,94,95,96,97,98],
	      [,99,100,101,102,103,104,105,106,107,108,109],
	      [,110,111,112,113,114,115,116,117,118,119,120],
	      ];
    MDirect = [
	       1,1,1,1,1,1,1,1,1,1,
	       0,0,0,0,0,0,0,0,0,0,
	       3,3,3,3,3,3,3,3,3,3,
	       2,2,2,2,2,2,2,2,2,2,
	       ]
    mapdirect=[
	       [4,4,4,4,4,4,4,4,4,4,4,4,4],
	       [4,3,3,3,3,3,3,3,3,3,3,2,4],
	       [4,0,4,4,4,4,4,4,4,4,4,2,4],
	       [4,0,4,4,4,4,4,4,4,4,4,2,4],
	       [4,0,4,4,4,4,4,4,4,4,4,2,4],
	       [4,0,4,4,4,4,4,4,4,4,4,2,4],
	       [4,0,4,4,4,4,4,4,4,4,4,2,4],
	       [4,0,4,4,4,4,4,4,4,4,4,2,4],
	       [4,0,4,4,4,4,4,4,4,4,4,2,4],
	       [4,0,4,4,4,4,4,4,4,4,4,2,4],
	       [4,0,4,4,4,4,4,4,4,4,4,2,4],
	       [4,0,1,1,1,1,1,1,1,1,1,1,4],
	       [4,4,4,4,4,4,4,4,4,4,4,4,4],
	       ];

    map.loadData(mapArray);
    game.rootScene.addChild(map);
}


mytheme = {
    normal : { 
	color : '#00F',
	background: { type: 'linear-gradient', start: '#fcc', end: '#fc6' },
	border: { color: '#f99', width: 1, type: 'solid' },
	textShadow: { offsetX: 0.5, offsetY: 0.5, blur: '3px', color: '#F00' },
	boxShadow: { offsetX: 2, offsetY: 2, blur: '5px', color: 'rgba(0, 0, 0, 0.3)' }
    },
    active : { 
	color : '#00F',
	background: { type: 'linear-gradient', start: '#fee', end: '#fd6' },
	border: { color: '#fbb', width: 1, type: 'solid' },
	textShadow: { offsetX: 0.5, offsetY: 0.5, blur: '3px', color: '#F00' },
	boxShadow: { offsetX: 2, offsetY: 2, blur: '5px', color: 'rgba(0, 0, 0, 0.3)' }
    }
}
    