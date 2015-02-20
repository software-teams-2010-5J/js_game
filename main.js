window.onload = preloadAssets;

var title;
var scene;
var game;
var button;
var kuma;
var map;
var mapArray;
var mapdirect;
var t=1;
var message_field;

var use_message;
var SPRITE_WIDTH  = 320;
var SPRITE_HEIGHT = 280;
var MAP_NUM = 10;
var button_t;

function preloadAssets(){
    game = new Game(WIDTH,HEIGHT);
    button = new Button("dice","light",50,50);
    kuma = new Sprite(32,32);
    map = new Map(48, 48);
    message_field = new BaseMessageWindow(MESSAGE_WINDOW_SIZE_X,MESSAGE_WINDOW_SIZE_Y, MESSAGE_WINDOW_POSITION_X,MESSAGE_WINDOW_POSITION_Y);
    title = new Scene();
    title.backgroundColor = "brown";
    
    var mytheme = {
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
    button_t = new Button("モノポリ　スタート",mytheme,320,320);
    button_t.font = '60px serif';
    button_t.moveTo(300,200);
    title.addChild(button_t);
    
    var second = new Scene();
    var third = new Scene();

    
    game.preload(
		 'images/chara1.png', 
		 '444.png'
		 );   
    
    game.rootScene.backgroundColor = "blue";    
    game.fps = 30;
    game.onload = init;
    
    second.backgroundColor = "red";
    
    game.start();
    
    
}

function init(){
    var i;
    for(i = 0;i < 40;i++)
    {
	console.log(field[i].name);
    }
    player[0] = new Player("Akira0");
    player[1] = new Player("Akira1");
    player[2] = new Player("Akira2");
    player[3] = new Player("Akira3");
    for(i = 0;i < 4;i++)
    {
	console.log(player[i].name);
    }
    var posx;
    var posy;
    t=1;
    kuma.image = game.assets['images/chara1.png'];
    map.image = game.assets['444.png'];

    map_init();
    kuma_init();

    game.rootScene.addChild(button);
    game.rootScene.addChild(kuma);
    
    map.loadData(mapArray);
    game.rootScene.addChild(map);
    game.rootScene.addChild(kuma);
    
    button.moveTo(400,400);
    
    button.ontouchstart = but;
    kuma.onenterframe= kuma_mov;
    game.pushScene(title);
    button_t.addEventListener("touchend", function(e) { game.popScene(); });
}

function kuma_mov(){
    
    if(t!=1 && 0 < kuma.vx ){
	posx = (kuma.x-8)/48;
	posy = (kuma.y-8)/48;
	
	if(mapdirect[posy][posx]==0){
	    kuma.y = kuma.y - 48;
	    kuma.vx--;
	}
	else if(mapdirect[posy][posx]==1){
	    kuma.x = kuma.x- 48;
	    kuma.vx--;
	}
	else if(mapdirect[posy][posx]==2){
	    kuma.y = kuma.y+ 48;
	    kuma.vx--;
	}
	else if(mapdirect[posy][posx]==3){
	    kuma.x = kuma.x+ 48;
	    kuma.vx--;
	}	   
	if(kuma.vx <= 0)
	    {
		t=1;
		game.rootScene.addChild(message_field);
		if(((kuma.x - 8) / 16) % 2)
		{
		    use_message = msglabel[0];
		}else{
		    use_message = msglabel[1];
		}
		console.log(kuma.x);
		game.rootScene.addChild(use_message);
	    }
    }
}

function kuma_init(){
    kuma.x = 48*1+8;
    kuma.y = 48*1+8;
    kuma.scaleX = 0.9;
    kuma.scaleY = 0.8;
}

function but()
{
    game.rootScene.removeChild(message_field);
    game.rootScene.removeChild(use_message);
    if(t==1){
	var r = Math.floor(Math.random() * 6) + 1;
	kuma.vx = r;
	this.text = "dice:+"+r;
	console.log("kuma.vx = "+kuma.vx);
	t=0;
    }
}
