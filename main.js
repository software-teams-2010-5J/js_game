enchant();
window.onload = preloadAssets;

var scene;
var game;
var button;
var kuma;
var map;
var mapdirect;
var WIDTH=480;
var HEIGHT=320;
var t;
var field;
var msglabel = [];
var use_message;
var SPRITE_WIDTH  = 320;
var SPRITE_HEIGHT = 280;
var BACKGROUND_COLOR = 'rgb(185, 130, 190)';
var WINDOWS_LINE_COLOR = 'rgb(235, 140, 70)';
var WINDOWS_LINE_COLOR_SHADE = "black";
var WINDOW_COLOR = 'rgb(251, 215, 157)';
var MESSAGE_WINDOW_SIZE_X = 350;
var MESSAGE_WINDOW_SIZE_Y = 70;
var MESSAGE_WINDOW_POSITION_X = 10;
var MESSAGE_WINDOW_POSITION_Y = 220;

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
   map = new Map(16, 16);
   field = new BaseMessageWindow(MESSAGE_WINDOW_SIZE_X,MESSAGE_WINDOW_SIZE_Y, MESSAGE_WINDOW_POSITION_X,MESSAGE_WINDOW_POSITION_Y);
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
		'images/map0.png'
		);   
    
    game.rootScene.backgroundColor = "blue";    
    game.fps = 30;
    game.onload = init;
    game.start();
}

function init(){
    
    t=1;
    kuma.image = game.assets['images/chara1.png'];
    map.image = game.assets['images/map0.png'];
    //var file = fs.OpenTextFile("map.txt",1);

    kuma.x = 8;
    kuma.y = 8;
    kuma.i =26;
    kuma.scaleX = 0.7;
    kuma.scaleY = 0.7;
   
    game.rootScene.addChild(button);
    game.rootScene.addChild(kuma);
    var mapArray = [
		    [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
		    [4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4],
		    [4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4],
		    [4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4],
		    [4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4],
		    [4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4],
		    [4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4],
		    [4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4],
		    [4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4],
		    [4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4],
		    [4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4],
		    [4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4],
		    [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
		    ];
    
    mapdirect =  [
		  [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
		  [4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,4],
		  [4,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,2,4],
		  [4,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,2,4],
		  [4,0,5,5,5,2,1,1,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,2,4],
		  [4,0,5,5,5,2,5,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,2,4],
		  [4,0,5,5,5,2,5,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,2,4],
		  [4,0,1,1,1,2,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],
		  [4,0,5,5,5,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4],
		  [4,0,5,5,5,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4],
		  [4,0,5,5,5,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4],
		  [4,0,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4],
		  [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
		  ];
    map.loadData(mapArray);
    game.rootScene.addChild(map);
    game.rootScene.addChild(kuma);

    button.moveTo(400,100);
    t=1;
    if(t==1){

	button.ontouchstart = but;
	
    }
    kuma.onenterframe= function(){

	if(t!=1 && 0 < kuma.vx ){
	    
	    if(mapdirect[(kuma.y+8)/16][(kuma.x+8)/16]==0){
		kuma.y = kuma.y - 16;
		kuma.vx--;
	    }
	    if(mapdirect[(kuma.y+8)/16][(kuma.x+8)/16]==1){
		kuma.x = kuma.x- 16;
		kuma.vx--;
	    }
	    if(mapdirect[(kuma.y+8)/16][(kuma.x+8)/16]==2){
		kuma.y = kuma.y+ 16;
		kuma.vx--;
	    }
	    if(mapdirect[(kuma.y+8)/16][(kuma.x+8)/16]==3){
		kuma.x = kuma.x+ 16;
		kuma.vx--;
	    }
	    
	    console.log(kuma.vx);	    
	    if(kuma.vx <= 0)
	    {
		t=1;
		game.rootScene.addChild(field);
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
}


function but()
{
    game.rootScene.removeChild(field);
    game.rootScene.removeChild(use_message);
    if(t==1){
	var r = Math.floor(Math.random() * 6) + 1;
	kuma.vx = r;
	this.text = "dice:+"+r;
	console.log("kuma.vx jus = "+kuma.vx);
	t=0;
    }
}
