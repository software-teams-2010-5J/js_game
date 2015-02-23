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
	if(player[turn_num].status == JAILER && player[turn_num].money >= 50)
	{
	    var paybutton = new Button("pay","light",MESSAGE_WINDOW_SIZE_Y,100);
	    eject_prison = function(){
		player[turn_num].status == NORMAL_STATUS;
		player[turn_num].money -= 50;
		effect_mes.text = "50$支払って脱獄";
		game.ontouchstart(){
		    game.popScene();
		}
	    }
	    if(player[turn_num].jailer_count == 3)
		eject_prison();
	    else{
		paybutton.ontouchstart = eject_prison;
		effect_scene.addChild(paybutton);	
	    }
	    var Nobutton = new Button("No","light",MESSAGE_WINDOW_SIZE_Y,100);
	    Nobutton.ontouchstart = function(){
		var r = Math.floor(Math.random() * 6) + 1;
		effect_mes.text = r;
		if(r % 2 == 0)
		{
		    player[turn_num].status = NORMAL_STATUS;
		    effect_mes += "脱獄成功！";
		}else{
		    effect_mes += "脱獄失敗";
		    player[turn_num].
		}
		game.popScene();
	    }
	    paybutton.moveTo(MESSAGE_WINDOW_POSITION_X+MESSAGE_WINDOW_SIZE_X,MESSAGE_WINDOW_POSITION_Y);
	    Nobutton.moveTo(MESSAGE_WINDOW_POSITION_X+MESSAGE_WINDOW_SIZE_X,MESSAGE_WINDOW_POSITION_Y)
	    effect_scene.addChild(paybutton);
	    effect_scene.addChild(effect_mes);

	}
    }
}
effect[6] = {
    function: function(){
	console.log("刑務所へ入れ");
	root_mes.text = "刑務所へ入れ";
	player[turn_num].point = 10;
	player[turn_num].moveTo(48*1+16,48*11);
	increment();
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
    
