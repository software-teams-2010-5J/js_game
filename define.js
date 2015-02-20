enchant();

//ゲームウインドウサイズ
var WIDTH = 960;
var HEIGHT = 720;

//メッセージウインドウサイズ
var MESSAGE_WINDOW_SIZE_X = 500;
var MESSAGE_WINDOW_SIZE_Y = 70;
var MESSAGE_WINDOW_POSITION_X = 50;
var MESSAGE_WINDOW_POSITION_Y = 600;

//メッセージウインドウ関連オプション
var BACKGROUND_COLOR = 'rgb(185, 130, 190)';
var WINDOWS_LINE_COLOR = 'rgb(235, 140, 70)';
var WINDOWS_LINE_COLOR_SHADE = "black";
var WINDOW_COLOR = 'rgb(251, 215, 157)';

//メッセージ位置用マージン
var MESSAGE_MARGIN_X = 10;
var MESSAGE_MARGIN_Y = 15;

/* メッセージ画面クラス
 使い方：use_messageに使いたい文言を追加する。
 addchildして、表示を消すタイミングでremovechildする。
 */
BaseMessageWindow = Class.create(Sprite, {
    initialize:function(width, height, x, y){
        // 親クラス コンストラクタ
        Sprite.call(this, width, height);

        // デフォルト引数
        if (x === undefined) x=0;
        if (y === undefined) y=0;

        // サーフェス生成
	var surface = new Surface(width, height);

        // 描画設定
        surface.context.beginPath();
        surface.context.rect(0, 0, width-1, height-1);
        surface.context.fillStyle = "orange"; // 色指定
        surface.context.shadowColor = WINDOWS_LINE_COLOR_SHADE;
	surface.context.shadowBlur = 1;
        surface.context.shadowOffsetX = 1;
        surface.context.shadowOffsetY = 1;
        surface.context.fill();     // 描画

        surface.context.beginPath();
        surface.context.rect(4, 4, width-7, height-7);
        surface.context.fillStyle = WINDOW_COLOR; // 色指定
        surface.context.shadowColor = WINDOWS_LINE_COLOR_SHADE;
        surface.context.shadowBlur = 1;
        surface.context.shadowOffsetX = -1;
        surface.context.shadowOffsetY = -1;
        surface.context.fill();     // 描画

        // 表示位置設定
        this.x = x;
        this.y = y;
        this.image = surface;

        this.counter = 1;
    }
});

//マップ初期宣言
function map_init(){

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
    
    mapdirect = [
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
}

//テスト文字列
var msglabel;
msglabel = new Label();
msglabel.font = "32px monospace";
msglabel.color = "#000000";
msglabel.text = "移動が終了しましたえ";
msglabel.x = MESSAGE_WINDOW_POSITION_X + MESSAGE_MARGIN_X;
msglabel.y = MESSAGE_WINDOW_POSITION_Y + MESSAGE_MARGIN_Y;
