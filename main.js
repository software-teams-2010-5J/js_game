window.onload = preloadAssets;

//scene
var title;
var site_scene;
var dice_scene;
var effect_scene;
var turn_num;
var treat;

var PLAYER_NUM = 2;

var game;
var button;
var kuma;

var fl=0; //現状のターンのプレイヤーが行動済み(=1)かまだ（＝０）か
var Anf=0;//アニメーション済み(=1)かどうか

var map;
var mapArray;
var mapdirect;
var MDirect;
var WIDTH=960;
var HEIGHT=720;

var message_field;
var root_message_field;

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
    root_message_field = new BaseMessageWindow(MESSAGE_WINDOW_SIZE_X,MESSAGE_WINDOW_SIZE_Y, MESSAGE_WINDOW_POSITION_X,MESSAGE_WINDOW_POSITION_Y);
    dice_scene = new Scene();
    
    game.preload(
		 '960.png',
		 'pink.png',
		 '444.png',
		 'images/chara1.png', 
		 'chara1.gif', 
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
    console.log("i");
    map_init();
    // kuma_init();
    player_init();

    scene_init();

    game.addEventListener('enterframe',mono);
}

function increment()
{
    turn_num++;
    turn_num%=PLAYER_NUM;
    if(turn_num == 0 )
	{
	    game.rootScene.addChild(button);	
	}

}

function mono(){
    console.log(player[0].name);
    if(turn_num == 0 && treat == true && fl == 0)
	{
	    
	}
    if(turn_num != 0 && treat == true && fl == 0)
	{
	    //game.rootScene.removeChild(button);
	    //    AI();
	}
}
function AI()
{
    dice();
}
function dice()
{
    if(fl == 0){
	var r = Math.floor(Math.random() * 6) + 1;
	button.text = "dice:"+r;		
	move(r);
	fl =1;
	judge_site();
	player[turn_num].tl.then(function(){
		Anf =1;
		if(turn_num == 0)
		    {
			game.rootScene.removeChild(button);
			console.log("your turn");
		    }
	    });    
    }
}

function but()
{
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
