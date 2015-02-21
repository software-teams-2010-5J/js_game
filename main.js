window.onload = preloadAssets;

//scene
var title;
var site_scene;
var dice_scene;
var effect_scene;
var turn_num;


var PLAYER_NUM = 2;


var game;
var button;
var kuma;

var map;
var mapArray;
var mapdirect;
var WIDTH=960;
var HEIGHT=720;


var message_field;

var use_message;
var SPRITE_WIDTH  = 320;
var SPRITE_HEIGHT = 280;
var MAP_NUM = 10;
var button_t;
var message_site;


function preloadAssets(){
    game = new Game(WIDTH,HEIGHT);
    button = new Button("dice","light",50,50);
    kuma = new Sprite(32,32);
    map = new Map(48, 48);
    message_field = new BaseMessageWindow(MESSAGE_WINDOW_SIZE_X,MESSAGE_WINDOW_SIZE_Y, MESSAGE_WINDOW_POSITION_X,MESSAGE_WINDOW_POSITION_Y);

    
    dice_scene = new Scene();

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
    
    game.preload(
		 '960.png',
		 'pink.png',
		 '444.png',
		 'images/chara1.png', 
		 'black.png'
		 );   
    
    game.rootScene.backgroundColor = "blue";    
    game.fps = 30;
    game.onload = init;
    
    game.start();
    
}

function init(){
    var posx;
    var posy;
    var i;
    t=1;
    map_init();    
    // kuma_init();
    player_init();
    for(i=0;i<PLAYER_NUM;i++){
	console.log(player[i].x);
    } 
    scene_init();
}
function dice()
{
    if(t==1){
    var r = Math.floor(Math.random() * 6) + 1;
    this.text = "dice:"+r;
    player[0].v = r;
    player[0].point += r;
    console.log(t);
    t =0;
    console.log("player[0].v = "+player[0].v);
    }
}

function but()
{
    game.rootScene.removeChild(message_field);
    game.rootScene.removeChild(use_message);
    if(t==1){
	var r = Math.floor(Math.random() * 6) + 1;
	kuma.v =2;
	kuma.vx = r;
	this.text = "dice:+"+r;
	player[0].point += r;
	if(player[0].point >= 40)
	    {
		player[0].point = player[0].point - 40;
	    }
	msglabel.text = field[player[0].point].name;
	game.pushScene(effect_scene);
	if(field[player[0].point].effect_id >= 3)
	    effect[field[player[0].point].effect_id - 3].function();
	game.popScene();
	console.log("kuma.vx = "+kuma.vx);
	console.log("nowpointname = "+field[0].name);
	t=0;
    }
}
