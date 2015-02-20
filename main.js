enchant();
window.onload = preloadAssets;

var title;
var scene;
var game;
var button;
var kuma;
var map;
var mapArray;
var mapdirect;
var WIDTH=960;
var HEIGHT=960;
var t=1;
var message_field;
var msglabel = [];
var use_message;
var SPRITE_WIDTH  = 320;
var SPRITE_HEIGHT = 280;
var BACKGROUND_COLOR = 'rgb(185, 130, 190)';
var WINDOWS_LINE_COLOR = 'rgb(235, 140, 70)';
var WINDOWS_LINE_COLOR_SHADE = "black";
var WINDOW_COLOR = 'rgb(251, 215, 157)';
var MAP_NUM = 10;
var MESSAGE_WINDOW_SIZE_X = 350;
var MESSAGE_WINDOW_SIZE_Y = 70;
var MESSAGE_WINDOW_POSITION_X = 10;
var MESSAGE_WINDOW_POSITION_Y = 220;
var button_t;
/**
 * メッセージ画面クラス
 使い方：use_messageに使いたい文言を追加する。
 addchildして、表示を消すタイミングでremovechildする。
 */
BaseMessageWindow = Class.create(Sprite, {
    initialize:function(width, height, x, y){
        // 親クラス コンストラクタ
        Sprite.call(this, width, height);

        // デフォルト引数
        if (x === undefined) x=0;
        if (y === undefined) y=0;

        // サーフェス生成
	var surface = new Surface(width, height);

        // 描画設定
        surface.context.beginPath();
        surface.context.rect(0, 0, width-1, height-1);
        surface.context.fillStyle = "orange"; // 色指定
        surface.context.shadowColor = WINDOWS_LINE_COLOR_SHADE;
	surface.context.shadowBlur = 1;
        surface.context.shadowOffsetX = 1;
        surface.context.shadowOffsetY = 1;
        surface.context.fill();     // 描画

        surface.context.beginPath();
        surface.context.rect(4, 4, width-7, height-7);
        surface.context.fillStyle = WINDOW_COLOR; // 色指定
        surface.context.shadowColor = WINDOWS_LINE_COLOR_SHADE;
        surface.context.shadowBlur = 1;
        surface.context.shadowOffsetX = -1;
        surface.context.shadowOffsetY = -1;
        surface.context.fill();     // 描画

        // 表示位置設定
        this.x = x;
        this.y = y;
        this.image = surface;

        this.counter = 1;
    }
});

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
    msglabel[0] = new Label();
    msglabel[0].font = "32px monospace";
    msglabel[0].color = "#000000";
    msglabel[0].text = "移動が終了しましたえ";
    msglabel[0].x = 22;
    msglabel[0].y = 240;
    msglabel[1] = new Label();
    msglabel[1].font = "32px monospace";
    msglabel[1].color = "#000000";
    msglabel[1].text = "移動が終了しましたび";
    msglabel[1].x = 22;
    msglabel[1].y = 240;
    
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
var i;
function init(){
for(i = 0;i < 40;i++)
{
    console.log(field[i].name);
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
function map_init(){
    



    
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
    
    mapdirect = [
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
