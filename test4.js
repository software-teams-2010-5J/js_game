enchant();
window.onload = function() {
    var game = new Game(320, 320);
    game.fps = 60;
    game.rootScene.backgroundColor = "#fff";
    game.preload('images/chara1.png');
    game.onload = function() {
	var map =new MAP()
        var b1 = new Bear(10, 10);
        game.rootScene.addEventListener('touchstart', function(event) {
		// 画面のタッチした位置へ瞬時に移動
		b1.x = event.x;
		b1.y = event.y;
	    });
    };
    game.start();
    
    var Bear = Class.create(Sprite, {
	    initialize : function(x, y) {
		Sprite.call(this, 32, 32);
		this.image = game.assets['images/chara1.png'];
		this.x = x;
		this.y = y;
		this.frame = 0;
		game.rootScene.addChild(this);
	    },        
	});
};
