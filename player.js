var NORMAL_STATUS = 0;
var JAILER = 1;
var START_MONEY = 800;
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
	    this.status = 0;
	    this.jailer_count = 0;
	    game.rootScene.addChild(this);
	}
});
