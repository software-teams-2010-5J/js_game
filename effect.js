var effect = [];
var effect_mes = new Label();
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
	effect_scene.addChild(effect_mes);
	//囚人判定
	if(player[turn_num].status == JAILER)
	{
	    
	    console.log("刑務所");
	    effect_mes.text = "刑務所";
	    //プレイヤーであれば	    
	    if(turn_num == 0)
	    {
		//３回目であれば
		if(player[turn_num].jailer_count == 3)
		{
		    if(player[turn_num].money >= 50)
		    {
			//50ドル払い、釈放
			player[turn_num].money -= 50;
			player[turn_num].status = NORMAL_STATUS;
		    }else{
			//50ドルなければ終わり
			game.pushScene(end);
		    }
		}else{
		    //3回目でなければ
		    //50ドル払うかサイコロふる。
		    effect_scene.addChild(Dicebutton);
		    effect_scene.addChild(Paybutton);	
		    effect_scene.removeChild(Dicebutton);
		    effect_scene.removeChild(Paybutton);	
		    
		}
	    }else{
		//プレイヤーでなれけば
		if(player[turn_num].jailer_count == 3)
		{
		    if(player[turn_num].money >= 50)
		    {
			player[turn_num].money -= 50;
			player[turn_num].status = NORMAL_STATUS;
			player[turn_num].jailer_count = 0;
			//CPUの所持金が50$以上であれば
			//強制的に釈放させる
		    }else{
			game.pushScene(end);
			//50ドルなければ終わり
		    }
		}else{
		    //CPUの所持金が50$未満であれば
		    //サイコロをふる
		    var r = Math.floor(Math.random() * 6) + 1;
		    if(r % 2)
		    {
			effect_mes = "釈放";
			player[turn_num].status = NORMAL_STATUS;
			player[turn_num].jailer_count = 0;
		    }
		    else
		    {
			effect_mes = "残留";
			player[turn_num].jailer_count ++;
		    }
		    game.popScene()
		    
		}
	    }
	    increment();
	}else{
	    console.log("刑務所見学");
	    effect_mes.text = "刑務所見学";
	}
	
    }
};

effect[6] = {
     function: function(){
	 console.log("刑務所へ入れ");
	 player[turn_num].point = 10;
	 player[turn_num].moveTo(48*1+16,48*11);
	 player[turn_num].status = JAILER;
	 effect_scene.addChild(effect_mes);
	 effect_mes.text = "刑務所へ入れ";
    }
};
effect[7] = {
    function: function(){
	console.log("駐車場");
	effect_mes.text = "駐車場:何もなし";
	effect_scene.addChild(effect_mes);
	}
};
    
