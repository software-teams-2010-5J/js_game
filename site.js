function judge_site()
{
    if(field[player[turn_num].point].effect_id <= 2)
	site();
}

function site()
{
    point = player[turn_num].point;
    msglabel.text = field[point].name + "\n price:" + field[point].value;
    if(field[point].owner == null)
    {
	console.log("所有者なし");
	if(turn_num == 0){
	    
	    site_scene.addChild(msglabel);
	    game.pushScene(site_scene);
	}
    }
    else
    {
	point_owner = player[field[point].owner];
	console.log("所有者は"+point_owner.name);
	if(point_owner != turn_num)
	{
	    //今レンタル料金0.5にしてます。
	    console.log("player:"+player[turn_num].money+"owner"+player[field[point].owner].money);
	    player[turn_num].money -= field[point].value * 0.5;
	    player[field[point].owner].money += field[point].value * 0.5;
	    console.log("player:"+player[turn_num].money+"owner"+player[field[point].owner].money);
	}
    }

}
