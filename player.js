var START_MONEY = 1500;
var START_PLACE = 8+48*11;
var player=[];

var Player = Class.create(Sprite,{
	initialize: function(input_name){
	    Sprite.call(this,32,32);
	    this.x = START_PLACE;
	    this.y = START_PLACE;
	    this.money =START_MONEY;
	    this.scaleX =0.9;
	    this.scaleY =0.8;
	    this.point = 0;
	    this.name = input_name;
	    this.v = 0;
	    game.rootScene.addChild(this);
	}
    });
