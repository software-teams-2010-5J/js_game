function judge_site()
{
    if(posx == 2 && posy == 1)
	{
	    turn_mes.text = "Owner :"+field.owner;
	    game.pushScene(site_scene);
	    
	}
}

function kuma_mov()
{
    if(t!=1 && 0 < player[0].v){
	posx = (player[0].x-8)/48;
	posy = (player[0].y-8)/48;
	
	if(mapdirect[posy][posx]==0){
	    player[0].y = player[0].y - 48;
	    player[0].v--;
	}
	else if(mapdirect[posy][posx]==1){
	    player[0].x = player[0].x- 48;
	    player[0].v--;
	}
	else if(mapdirect[posy][posx]==2){
	    player[0].y = player[0].y+ 48;
	    player[0].v--;
	}
	else if(mapdirect[posy][posx]==3){
	    player[0].x = player[0].x+ 48;
	    player[0].v--;
	}	   
	if(player[0].v <= 0)
	    {
		posx = (player[0].x-8)/48;
		posy = (player[0].y-8)/48;
		t=1;
		judge_site();
		game.rootScene.addChild(message_field);
		use_message = msglabel;
		console.log(player[0].x);
		game.rootScene.addChild(use_message);
	    }
    }
}
