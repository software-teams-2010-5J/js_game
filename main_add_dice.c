window.onload = preloadAssets;

//scene
var title;
var site_scene;
var dice_scene;
var effect_scene;
var turn_num;
var treat;
var mess=[];    
var PLAYER_NUM = 2;
var pfl=0;
var game;
var button;
var kuma;

var fl=0; //現状のターンのプレイヤーがサイコロふり済み(=1)かまだ（＝０）か

var Anf=0;//アニメーション済み(=1)かどうか
var sitf=0;//サイト内で選択済み(=1)かどうか このフラグを各最終処理を行ったのちに立てる
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
    mess[turn_num].text = player[turn_num].name+"<br>:money:"+player[turn_num].money;
    turn_num++;
    turn_num%=PLAYER_NUM;
    sitf = 0;
    Anf = 0;
    fl = 0;
    pfl=0;
    if(turn_num == 0 )
	{
	    game.rootScene.addChild(button);
	}

}

function mono(){
    
    if(turn_num == 0 && treat == true && fl == 1 && sitf ==0)
	{    
	    if(Anf == 1 && pfl ==0){
		pfl =1;
		console.log("sfafafafaf");
		judge_site();
	    }   
	}
    if(turn_num != 0 && treat == true && sitf ==0)
	{
	    //game.rootScene.removeChild(button);
	    if(fl == 0 && pfl ==0)
		AI(2);
	    if(fl == 1 && Anf == 1 && pfl ==0)
		AI(3);
	}
    if(sitf ==1 && Anf==1 && fl ==1){
	increment();}
}
function AI(q)
{
    if(q==1){
	point = player[turn_num].point;
	if(field[point].value < player[turn_num].money){
	    field[point].owner = turn_num;
	    console.log("購入前:"+player[turn_num].money);
	    player[turn_num].money -= field[point].value;
	    console.log("購入後:"+player[turn_num].money);
	    console.log(player[turn_num].name+":購入しました");

	
	}else{
	    
	}
	sitf=1;
    }
    else if(q==2){
	pfl =1;
	dice();
    }
    else if(q==3){
	pfl =1;
	judge_site();
    }
}
function dice()
{
    if(fl == 0){

	var r = Math.floor(Math.random() * 6) + 1;
	var fig_1 = new Sprite(32,32);
	fig_1.image = game.assets['fig_1.png'];
	if(r == 1)
	    game.rootScene.addChild(fig_1);
	button.text = "dice:"+r;		
	move(r);
	fl =1;
	player[turn_num].tl.then(function(){
		Anf =1;
		pfl=0;
		if(turn_num == 0)
		    {
			console.log("sss:"+turn_num+":"+sitf+":"+fl+":"+Anf);
			game.rootScene.removeChild(button);

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


