function judge_site()
{
    if(field[player[turn_num].point].effect_id <= 2)
	site();
}
function site()
{
    game.pushScene(site_scene);
    var point = player[turn_num].point;
    if(!field[point].owner)
	console.log("所有者なし");
    else
    {
	point_owner = player[field[point].owner];
	console.log("所有者は"+point_owner.name);
    }
    game.popScene();
}
