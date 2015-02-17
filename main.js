enchant();
window.onload = preloadAssets;

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
var field;
var msglabel;
var SPRITE_WIDTH  = 320;
var SPRITE_HEIGHT = 280;
var BACKGROUND_COLOR = 'rgb(185, 130, 190)';
var WINDOWS_LINE_COLOR = 'rgb(235, 140, 70)';
var WINDOWS_LINE_COLOR_SHADE = "black";
var WINDOW_COLOR = 'rgb(251, 215, 157)';
var MAP_NUM = 10;
var posx;
var posy;
/**
 * メッセージ画面クラス
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
   field = new BaseMessageWindow(300, 70, 10, 220);
   msglabel = new Label();
   msglabel.font = "32px monospace";
   msglabel.color = "#000000";
   msglabel.text = "移動が終了しました";
   msglabel.x = 22;
   msglabel.y = 240;
   game.preload(
		'images/chara1.png', 
		'489.png'
		);   
    
    game.rootScene.backgroundColor = "blue";    
    game.fps = 30;
    game.onload = init;
    game.start();
}

function init(){

    t=1;
    kuma.image = game.assets['images/chara1.png'];
    map.image = game.assets['489.png'];

    map_init();
    // read file functiom 
    kuma_init();
    game.rootScene.addChild(button);
    game.rootScene.addChild(kuma);

    map.loadData(mapArray);
    game.rootScene.addChild(map);
    game.rootScene.addChild(kuma);

    button.moveTo(400,400);

    //    if(t==1){
    
    button.ontouchstart = but;
    
    // }
    kuma.onenterframe= function(){
	
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
		    game.rootScene.addChild(field);
		    game.rootScene.addChild(msglabel);
		}
	}
    }
}
function map_init(){

    mapArray = [
		[4,4,4,4,4,4,4,4,4,4,4,4,4],
		[4,0,0,0,0,0,0,0,0,0,0,0,4],
		[4,0,3,3,3,3,3,3,3,3,3,0,4],
		[4,0,3,3,3,3,3,3,3,3,3,0,4],
		[4,0,3,3,3,3,3,3,3,3,3,0,4],
		[4,0,3,3,3,3,3,3,3,3,3,0,4],
		[4,0,3,3,3,3,3,3,3,3,3,0,4],
		[4,0,3,3,3,3,3,3,3,3,3,0,4],
		[4,0,3,3,3,3,3,3,3,3,3,0,4],
		[4,0,3,3,3,3,3,3,3,3,3,0,4],
		[4,0,3,3,3,3,3,3,3,3,3,0,4],
		[4,0,0,0,0,0,0,0,0,0,0,0,4],
		[4,4,4,4,4,4,4,4,4,4,4,4,4],
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
    game.rootScene.removeChild(field);
    game.rootScene.removeChild(msglabel);
    if(t==1){
	var r = Math.floor(Math.random() * 6) + 1;
	kuma.vx = r;
	this.text = "dice:+"+r;
	console.log("kuma.vx = "+kuma.vx);
	t=0;
    }
}
