var START_MONEY = 800;
var FIRST_POSITON = {x: 8,y: 8};
var player = [];
var Player = function(input_name){
    this.name = input_name;
    this.money = START_MONEY;
    this.potition = FIRST_POSITON;
    this.point = 0;
};
    
