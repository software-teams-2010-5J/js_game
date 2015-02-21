function kuma_mov(){
    
    if(t!=1 && 0 < kuma.vx ){
	posx = (kuma.x-8)/48;
	posy = (kuma.y-8)/48;
	
	if(mapdirect[posy][posx]==0){
	    kuma.y = kuma.y - 48;
	    kuma.vx--;
	}
	else if(mapdirect[posy][posx]==1){
	    kuma.x = kuma.x- 48;
	    kuma.vx--;
	}
	else if(mapdirect[posy][posx]==2){
	    kuma.y = kuma.y+ 48;
	    kuma.vx--;
	}
	else if(mapdirect[posy][posx]==3){
	    kuma.x = kuma.x+ 48;
	    kuma.vx--;
	}	   
	if(kuma.vx <= 0)
	    {
		posx = (kuma.x-8)/48;
		posy = (kuma.y-8)/48;
		t=1;
		if(posx == 2 && posy == 1)
		    {
			game.pushScene(site_scene);
		    }
		game.rootScene.addChild(message_field);
		use_message = msglabel;
		console.log(kuma.x);
		game.rootScene.addChild(use_message);
	    }
    }
}
