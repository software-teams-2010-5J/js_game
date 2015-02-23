var effect = [];

effect[0] = {
    function: function(){
	console.log("START");
	root_mes.text = "START";
	effect_scene.addChild(root_mes);
	}
};
effect[1] = {
    function: function(){
	console.log("共同基金");
	root_mes.text = "共同基金";
	effect_scene.addChild(root_mes);
	}
};
effect[2] = {
    function: function(){
	console.log("Chance");
	root_mes.text = "Chance";
	effect_scene.addChild(root_mes);
	}
};
effect[3] = {
    function: function(){
	console.log("所得税");
	root_mes.text = "所得税:200$支払う";
	player[turn_num].money -= 200;
	effect_scene.addChild(root_mes);
	}
};
effect[4] = {
    function: function(){
	console.log("物品税");
	root_mes.text = "物品税:100$支払う";
	player[turn_num].money -= 100;
	effect_scene.addChild(root_mes);
	}
};
effect[5] = {
    function: function(){
	console.log("刑務所");
	root_mes.text = "刑務所";
	effect_scene.addChild(root_mes);
	}
};
effect[6] = {
    function: function(){
	console.log("刑務所へ入れ");
	root_mes.text = "刑務所へ入れ";
	effect_scene.addChild(root_mes);
	}
};
effect[7] = {
    function: function(){
	console.log("駐車場");
	root_mes.text = "駐車場:何もなし";
	effect_scene.addChild(root_mes);
	}
};
    
