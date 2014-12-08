enchant();

window.onload = function() {
    var WIDTH=400;
    var HEIGHT=320;
    var game = new Game(WIDTH,HEIGHT);
    
    game.rootScene.backgroundColor = "blue";
    game.fps = 30;
    game.preload('images/chara1.png', 'images/map0.png');
    game.onload = function() {
	var button = new Button("dice","light",50,50);
	var kuma = new Sprite(32,32);
        var map = new Map(16, 16);
	
	var t =1;
	game.rootScene.addChild(button)
	button.moveTo(100,100);
	button.ontouchstart=function()
	{
	    var r = Math.floor(Math.random() * 6) + 1;
	    if(t==1){
		kuma.vx = r;
		this.text = "dice:+"+r;
	    }
	    else{
		kuma.vx=-r;
		this.text = "dice:-"+r;
	    }
	}
	kuma.image = game.assets['images/chara1.png'];
        map.image = game.assets['images/map0.png'];
	kuma.x = 8;
	kuma.y = 0;
	kuma.scaleX = 0.7;
	kuma.scaleY = 0.7;
	kuma.vx = 0;
	kuma.vy = 0;
	//kuma.frame = 20;
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
	
	map.loadData(mapArray);
	game.rootScene.addChild(map);
        game.rootScene.addChild(kuma);
	
	
	
        kuma.addEventListener('enterframe', function(e) {
		if(kuma.vx != 0){
		    kuma.x += kuma.vx*16;
		    kuma.vx =0;
		    if(WIDTH-40<=kuma.x){
			kuma.x =WIDTH-40;
			t=0;
		    };
		    if(kuma.x<8){
			kuma.x =8; 
			t =1;
		    };
		    console.log(kuma.x);
		    console.log(mapArray[0][0])
		};

	    });
    };
    game.start();
};
