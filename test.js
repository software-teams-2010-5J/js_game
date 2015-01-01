enchant();
window.onload = preloadAssets;

var scene;
var game;
var button;
var kuma;
var map;
var mapdirect;
var WIDTH=400;
var HEIGHT=320;
var t;

function preloadAssets(){
    
   game = new Game(WIDTH,HEIGHT);
   button = new Button("dice","light",50,50);
   kuma = new Sprite(32,32);
   map = new Map(16, 16);
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
		  [4,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,2,4],
		  [4,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,2,4],
		  [4,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,2,4],
		  [4,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],
		  [4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4],
		  [4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4],
		  [4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4],
		  [4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4],
		  [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
		  ];
    map.loadData(mapArray);
    game.rootScene.addChild(map);
    game.rootScene.addChild(kuma);
    
    button.moveTo(100,100);
    t=1;
    button.ontouchstart = but;
    kuma.onenterframe= function(){
	if(t!=1){
	    console.log(mapdirect[(kuma.y+8)/16][(kuma.x+8)/16]);
	    if(mapdirect[(kuma.y+8)/16][(kuma.x+8)/16]==0){
		kuma.y =kuma.y - 16;
		kuma.vx --;
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
	    if(WIDTH-16<kuma.x){
		kuma.x =WIDTH-16;
	    }
	    if(kuma.y<8){
		kuma.y = 8;
	    }
	    if(kuma.x<8){
		kuma.x =8; 
	    }
	    
	    
	    if(kuma.vx==0)
		t=1;
	}
    }
}


function but()
{
    var r = Math.floor(Math.random() * 6) + 1;
    if(t==1){
	kuma.vx = r;
	this.text = "dice:+"+r;
	console.log("kuma.vx jus = "+kuma.vx);
	t=0;
    }
}