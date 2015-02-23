var name;
mytheme = {
    normal : { 
	color : '#00F',
	background: { type: 'linear-gradient', start: '#fcc', end: '#fc6' },
	border: { color: '#f99', width: 1, type: 'solid' },
	textShadow: { offsetX: 0.5, offsetY: 0.5, blur: '3px', color: '#F00' },
	boxShadow: { offsetX: 2, offsetY: 2, blur: '5px', color: 'rgba(0, 0, 0, 0.3)' }
    },
    active : { 
	color : '#00F',
	background: { type: 'linear-gradient', start: '#fee', end: '#fd6' },
	border: { color: '#fbb', width: 1, type: 'solid' },
	textShadow: { offsetX: 0.5, offsetY: 0.5, blur: '3px', color: '#F00' },
	boxShadow: { offsetX: 2, offsetY: 2, blur: '5px', color: 'rgba(0, 0, 0, 0.3)' }
    }
}
    
function player_init()
{
    for(i = 0;i < PLAYER_NUM; i++)
	{
	    player[i] = new Player("Akira"+i);
	    player[i].image = game.assets['images/chara1.png'];
	}   
}

function kuma_init(){
    kuma.image = game.assets['images/chara1.png'];
    kuma.x = 48*11+8;
    kuma.y = 48*11+8;
    kuma.scaleX = 0.9;
    kuma.scaleY = 0.8;
    game.rootScene.addChild(kuma);
}
var tb;
var name;
function title_init(){
    //title scene 
    title = new Scene();
    button_t = new Button("モノポリ　スタート",mytheme,320,320);
    button_t.font = '60px serif';
    button_t.moveTo(300,200);    
    title.backgroundColor = "white";
    title.addChild(button_t);

    var lbl = new Label("name");
    var tb = new InputTextBox();
    lbl.moveTo(300,100);
    lbl.width = 100;
    lbl.textAlign = "center";
    lbl.color = "#ffffff";
    var navigationBar = new NavigationBar(lbl);
    var bt = new Button("input name","light",50,50);
    tb.moveTo(WIDTH/2 -50, 200);
    bt.moveTo(WIDTH/2,330);
    tb.width = 200;
    //    enchant.widget._env.textMinHeight = "300px";
    //    enchant.widget._env.textMaxHeight = "300px";
    tb.height = 100;
    tb.placeholder = "名前を入力してください";
    
    
    button_t.addEventListener("touchend", function(e) { 
	    treat = true;
	    title.addChild(navigationBar);
	    title.addChild(tb);
	    title.addChild(bt);
	    title.addChild(lbl);
	    title.removeChild(button_t);
	    //   game.popScene();
	});       
    bt.addEventListener("touchend",function(e){
	    if(tb.value =="")
		{
		    alert("name wo irete");
		}
	    else{
		player[0].name = tb.value;
		mess[turn_num].text = player[turn_num].name+"<br>:money:"+player[turn_num].money;
		game.popScene();
	    }
	});
}



function scene_init(){
    title_init();

    //dice scene
    dice_scene = new Scene();
    //    dice_scene.addChild(button);
    game.rootScene.addChild(button);
    button.moveTo(800,600);
    button.ontouchstart = dice;    
    
    //site action scene
    site_scene = new Scene();
    var pink = new Sprite(960,720);
    message_site = new BaseMessageWindow(MESSAGE_WINDOW_SIZE_X,MESSAGE_WINDOW_SIZE_Y, MESSAGE_WINDOW_POSITION_X,MESSAGE_WINDOW_POSITION_Y);
    pink.image = game.assets['960.png'];
    site_scene.addChild(pink); 
    site_scene.addChild(message_site); 
    pink.moveTo(0,0);
    pink.opacity = 0.7;       
    site_scene.addChild(turn_mes);
    var Yesbutton = new Button("Yes","light",MESSAGE_WINDOW_SIZE_Y,100);
    Yesbutton.ontouchstart = function(){
	field[point].owner = turn_num;
	console.log("購入前:"+player[turn_num].money);
	player[turn_num].money -= field[point].value;
	console.log("購入後:"+player[turn_num].money);

	console.log("turn_num"+turn_num);
	sitf =1;
	game.popScene();    
	
    };
    Yesbutton.moveTo(MESSAGE_WINDOW_POSITION_X+MESSAGE_WINDOW_SIZE_X,MESSAGE_WINDOW_POSITION_Y);
    var Nobutton = new Button("No","light",MESSAGE_WINDOW_SIZE_Y,100);
    Nobutton.ontouchstart = function(){
	sitf =1;
	game.popScene();
    };
    Nobutton.moveTo(MESSAGE_WINDOW_POSITION_X+MESSAGE_WINDOW_SIZE_X+100,MESSAGE_WINDOW_POSITION_Y);
    
    site_scene.addChild(Yesbutton);
    site_scene.addChild(Nobutton);	

    //effect action scene
    effect_scene = new Scene();
    var black = new Sprite(960,720);
    black.image = game.assets['black.png'];
    effect_scene.addChild(black);
    black.moveTo(0,0);
    black.opacity = 0.4;

  //game root scene     
  turn_num = 0;    
  //player[0].onenterframe= mono;
  //player[0].onenterframe= kuma_mov;
  mess_init();
  game.pushScene(title);
}   
function map_init(){
    map.image = game.assets['444.png'];
    mapArray=[
	      [,,,,,,,,,,,,],
	      [,0,1,2,3,4,5,6,7,8,9,10],
	      [,11,12,13,14,15,16,17,18,19,20,21],
	      [,22,23,24,25,26,27,28,29,30,31,32],
	      [,33,34,35,36,37,38,39,40,41,42,43],
	      [,44,45,46,47,48,49,50,51,52,53,54],
	      [,55,56,57,58,59,60,61,62,63,64,65],
	      [,66,67,68,69,70,71,72,73,74,75,76],
	      [,77,78,79,80,81,82,83,84,85,86,87],
	      [,88,89,90,91,92,93,94,95,96,97,98],
	      [,99,100,101,102,103,104,105,106,107,108,109],
	      [,110,111,112,113,114,115,116,117,118,119,120],
	      ];
    MDirect = [
	       1,1,1,1,1,1,1,1,1,1,
	       0,0,0,0,0,0,0,0,0,0,
	       3,3,3,3,3,3,3,3,3,3,
	       2,2,2,2,2,2,2,2,2,2,
	       ];
    mapdirect=[
	       [4,4,4,4,4,4,4,4,4,4,4,4,4],
	       [4,3,3,3,3,3,3,3,3,3,3,2,4],
	       [4,0,4,4,4,4,4,4,4,4,4,2,4],
	       [4,0,4,4,4,4,4,4,4,4,4,2,4],
	       [4,0,4,4,4,4,4,4,4,4,4,2,4],
	       [4,0,4,4,4,4,4,4,4,4,4,2,4],
	       [4,0,4,4,4,4,4,4,4,4,4,2,4],
	       [4,0,4,4,4,4,4,4,4,4,4,2,4],
	       [4,0,4,4,4,4,4,4,4,4,4,2,4],
	       [4,0,4,4,4,4,4,4,4,4,4,2,4],
	       [4,0,4,4,4,4,4,4,4,4,4,2,4],
	       [4,0,1,1,1,1,1,1,1,1,1,1,4],
	       [4,4,4,4,4,4,4,4,4,4,4,4,4],
	       ];
    
    map.loadData(mapArray);
    game.rootScene.addChild(map);
}

function mess_init()
{
    var i;
    for(i=0;i<PLAYER_NUM;i++)
	{
	    mess[i] = new Label();
	    mess[i].font = "32px monospace";
	    mess[i].text = player[i].name+"<br>:money:"+player[i].money;
	    mess[i].x = 600;
	    mess[i].y = (100 * i)+100;
	    //  game.addEventListener('enterframe',function(e){ mess[i].text = player[i].name+"<br>:money:"+player[i].money;});
	    game.rootScene.addChild(mess[i]);
	}    
    game.rootScene.addChild(root_message_field);
    game.rootScene.addChild(root_mes);
    root_mes.text = "your turn";
    
    
} 