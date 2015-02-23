function move(r)
{
    var to = r+ player[turn_num].point;
    var from = player[turn_num].point;
    var i; //increment num
    var p; //previous Instruction
    var IFP = false; //Inflection Point
    var s;
    var flag;
  
    p = MDirect[from];
    console.log("old point:"+player[turn_num].point);
    IFP =false;
    flag =0;
    for(i=from+1;i<to;i++)
	{
	    if(p != MDirect[i%40]&&flag ==0)
		{
		    IFP = i;
		    console.log("IFP:"+IFP);
		    flag =1;
		}
	}
    console.log("sss:"+turn_num+":"+sitf+":"+fl+":"+Anf);
    if(IFP != false){
	console.log("IFP");
	console.log("to:"+to+"from:"+from);
	if(p == 0){
	    console.log(IFP-from);
	player[turn_num].tl.moveBy(0,-48*(IFP-from),30)
	    .moveBy(48*(to-IFP),0,30);    
	}
	else if(p == 1){
	 
	    player[turn_num].tl.moveBy(-48*(IFP-from),0,30)    
		.moveBy(0,-48*(to-IFP),30);
	}
	else if(p == 2){
	    player[turn_num].tl.moveBy(0,48*(IFP-from),30)
		.moveBy(-48*(to -IFP),0,30);
	}
	else if(p == 3){
	 
	    player[turn_num].tl.moveBy(48*(IFP-from),0,30)
		.moveBy(0,48*(to - IFP),30);
	}
	
    }
    else if(IFP ==false)
	{
	    console.log("not IFP");
	    if(p == 0){
		player[turn_num].tl.moveBy(0,-48*(to-from),30);
	    }
	    else if(p == 1){
		console.log('to -from :'+(to-from));
		player[turn_num].tl.moveBy(-48*(to-from),0,30);
	    }
	    else if(p == 2){
		player[turn_num].tl.moveBy(0,48*(to-from),30);
	    }
	    else if(p == 3){
		player[turn_num].tl.moveBy(48*(to-from),0,30);
	    }
	}
    
    player[turn_num].point = to%40;   
    console.log(turn_num+":new point:"+player[turn_num].point);
  
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
