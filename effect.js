var effect = [];
var effect_mes =new Label();
effect_mes.font = "16px monospace";
effect_mes.width = 600;
effect_mes.color = "#000000";
effect_mes.text = "Owner :<br>a";
effect_mes.x = MESSAGE_WINDOW_POSITION_X +10;
effect_mes.y = MESSAGE_WINDOW_POSITION_Y +5;
effect[0] = {
    function: function(){
	console.log("START");
	effect_mes.text = "START";
	effect_scene.addChild(effect_mes);
	}
};
effect[1] = {
    function: function(){
	console.log("共同基金");
	effect_mes.text = "共同基金";
	effect_scene.addChild(effect_mes);
	}
};
effect[2] = {
    function: function(){
	console.log("Chance");
	effect_mes.text = "Chance";
	effect_scene.addChild(effect_mes);
	}
};
effect[3] = {
    function: function(){
	console.log("所得税");
	effect_mes.text = "所得税:200$支払う";
	player[turn_num].money -= 200;
	effect_scene.addChild(effect_mes);
	}
};
effect[4] = {
    function: function(){
	console.log("物品税");
	effect_mes.text = "物品税:100$支払う";
	player[turn_num].money -= 100;
	effect_scene.addChild(effect_mes);
	}
};
effect[5] = {
    function: function(){
	console.log("刑務所");
	effect_mes.text = "刑務所";
	effect_scene.addChild(effect_mes);
	}
};
effect[6] = {
    function: function(){
	console.log("刑務所へ入れ");
	effect_mes.text = "刑務所へ入れ";
	effect_scene.addChild(effect_mes);
	}
};
effect[7] = {
    function: function(){
	console.log("駐車場");
	effect_mes.text = "駐車場:何もなし";
	effect_scene.addChild(effect_mes);
	}
};
    
