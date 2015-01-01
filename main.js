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
	    kuma.v = r;
	    this.text = "dice:+"+r;
	    t=0;
	}
    }
    kuma.image = game.assets['images/chara1.png'];
    map.image = game.assets['images/map0.png'];
    kuma.x = 8;
    kuma.y = 8;
    var kumai =26;
    kuma.scaleX = 0.7;
    kuma.scaleY = 0.7;
    kuma.v = 0;
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

    var mapdirect = [
			 [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
			 [4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,4],
			 [4,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,2,4],
			 [4,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,2,4],
			 [4,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,2,4],
			 [4,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,2,4],
			 [4,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,2,4],
			 [4,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,4],
			 [4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4],
			 [4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4],
			 [4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4],
			 [4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4],
			 [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
		      ];
    
    map.loadData(mapArray);
    game.rootScene.addChild(map);
    game.rootScene.addChild(kuma);
    
    button.addEventListener('touchend', function(e){    
	    
	    if(t==0){
		for(;kuma.v !=0;){
		    if(mapdirect[kumai]==0){
			kuma.y -= 16;
			kuma.v --;
			kumai-=25;
		    }
		    if(mapdirect[kumai]==1){
			    kuma.x -= 16;
			    kuma.v--;
			    kumai-=1;
		    }
		    if(mapdirect[kumai]==2){
			kuma.y += 16;
			kuma.v--;
			kumai+=25;
		    }
		    if(mapdirect[kumai]==3){
			kuma.x += 16;
			kuma.vx--;
			kumai+=1;
		    }
		    if(WIDTH-40<=kuma.x){
			kuma.x =WIDTH-40;
		    }
		    if(kuma.x<8){
			kuma.x =8; 
		    }
		}
		t=1;
		console.log(kuma.v);		
		console.log(t);
	    }

	});
    }
    game.start();
}
    