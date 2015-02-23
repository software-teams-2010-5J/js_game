var effect = [];

effect[0] = {
    function: function(){
	console.log("START");
	msglabel.text = "START";
	effect_scene.addChild(msglabel);
	}
};
effect[1] = {
    function: function(){
	console.log("共同基金");
	msglabel.text = "共同基金";
	effect_scene.addChild(msglabel);
	}
};
effect[2] = {
    function: function(){
	console.log("Chance");
	msglabel.text = "Chance";
	effect_scene.addChild(msglabel);
	}
};
effect[3] = {
    function: function(){
	console.log("所得税");
	msglabel.text = "所得税:200$支払う";
	player[turn_num].money -= 200;
	effect_scene.addChild(msglabel);
	}
};
effect[4] = {
    function: function(){
	console.log("物品税");
	msglabel.text = "物品税:100$支払う";
	player[turn_num].money -= 100;
	effect_scene.addChild(msglabel);
	}
};
effect[5] = {
    function: function(){
	console.log("刑務所");
	msglabel.text = "刑務所";
	effect_scene.addChild(msglabel);
	}
};
effect[6] = {
    function: function(){
	console.log("刑務所へ入れ");
	msglabel.text = "刑務所へ入れ";
	effect_scene.addChild(msglabel);
	}
};
effect[7] = {
    function: function(){
	console.log("駐車場");
	msglabel.text = "駐車場:何もなし";
	effect_scene.addChild(msglabel);
	}
};
    
