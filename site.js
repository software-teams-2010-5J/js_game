function judge_site()
{
    //土地だったら土地判定に飛ばして、土地じゃなかったらその関数へ
    if(field[player[turn_num].point].effect_id <= 2)
	site();
    else
    {
	effect_step();
	sitf =1;
    }
	
}
function effect_step()
{
    game.pushScene(effect_scene);    
    effect[field[player[turn_num].point].effect_id - 3].function();
    
    effect_scene.addEventListener("touchend", function(e) {    
	    game.popScene();    
	});   
    //game.popScene();
}
function site()
{
    //現在電力会社、鉄道のことは考慮してないです。
    point = player[turn_num].point;
    site_mes.text = field[point].name + "\n price:" + field[point].value;
    if(field[point].owner == null)
    {
	console.log("所有者なし");
	if(turn_num == 0){
	    site_scene.addChild(site_mes);
	    game.pushScene(site_scene);
	}else{
	    AI(1);
	}
    }
    else
    {
	point_owner = player[field[point].owner];
	console.log("所有者は"+point_owner.name);
	//所有者がいてかつ自分でないとレンタル料金が発生
	if(point_owner != turn_num)
	{
	    //今レンタル料金0.5にしてます。
	    console.log("player:"+player[turn_num].money+"owner"+player[field[point].owner].money);
	    
	    player[turn_num].money -= field[point].value * 0.5;
	    player[field[point].owner].money += field[point].value * 0.5;
	    console.log("player:"+player[turn_num].money+"owner"+player[field[point].owner].money);

	    ttex = player[turn_num].name+":"+field[point].value*0.5+"$のレンタル料金が引かれます";
	    root_mes_dialog(ttex);
	    sitf=1;
	}
    }

}
