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
var end;


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

var premes1="";
var premes2="";
var premes3="";
var premes4="";

var use_message;
var SPRITE_WIDTH  = 320;
var SPRITE_HEIGHT = 280;
var MAP_NUM = 10;
var button_t;
var message_site;
var mess_window;
function preloadAssets(){
    game = new Game(WIDTH,HEIGHT);
    button = new Button("dice","light",50,50);   
    kuma = new Sprite(32,32);
    map = new Map(48, 48);
    mess_window = new BaseMessageWindow(350,500,590,48);
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
    player_init();
    scene_init();
    game.addEventListener('enterframe',mono);
    end_init();
}

function root_mes_dialog(r)
{
    if(r ==""){
	game.rootScene.addChild(root_mes);
    }
    else{
	premes4 = premes3;
	premes3 = premes2;
	premes2 = premes1;
	premes1 = r;
	root_mes.text=premes1+"<br>"+premes2+"<br>"+premes3+"<br>"+premes4;
	game.rootScene.addChild(root_mes);
	console.log(root_mes.text);
    }
}
function increment()
{
    disp();
    judge();
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
var winner;
var loser;

function judge(){
    var i;
    var t=0;
    winner = false;
    loser = false;
    winer = 0;
    for(i=0;i<PLAYER_NUM;i++)
	{
	    if(t<player[i].money)
		{
		    t = player[i].money;
		    winer = i;
		}
	    if(player[i].money<=0)
		{
		    loser = i;
		    end_mes.text = "<br>Loser : <br>"+player[loser].name;
		    game.pushScene(end);
		}
	}
    if(loser != 10){

	
    }
}

function mono(){
    
    if(turn_num == 0 && treat == true && fl == 1 && sitf ==0)
	{    
	    if(Anf == 1 && pfl ==0){
		pfl =1;
		judge_site();
	    }   
	}
    if(turn_num != 0 && treat == true && sitf ==0)
	{
	    if(fl == 0 && pfl ==0)
		AI(2);
	    if(fl == 1 && Anf == 1 && pfl ==0)
		AI(3);
	}
    if(sitf ==1 && Anf==1 && fl ==1){
	increment();}
}
var ttex;
function AI(q)
{
    if(q==1){
	point = player[turn_num].point;
	if(field[point].value < player[turn_num].money){
	    field[point].owner = turn_num;
	    console.log("購入前:"+player[turn_num].money);
	    player[turn_num].money -= field[point].value;
	    console.log("購入後:"+player[turn_num].money);
	    console.log(player[turn_num].name+":購入しました -"+field[point].value+"$");
	    
	    ttex=player[turn_num].name+":"+field[player[turn_num].point].name+"を購入しました -"+field[point].value+"$";
	    root_mes_dialog(ttex);
	}else{
	    ttex=player[turn_num].name+":なにもしませんでした";
	    root_mes_dialog(ttex);
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
	button.text = "dice:"+r;		
	move(r);
	fl =1;
	player[turn_num].tl.then(function(){
		Anf =1;
		pfl=0;
		if(turn_num == 0)
		    {
			game.rootScene.removeChild(button);
		    }
	    });    
    }
}
function disp()
{
    var i;
    for(i=0;i<PLAYER_NUM;i++)
	{
	    mess[i].text = player[i].name+":<br>money:"+player[i].money;
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