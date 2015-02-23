enchant();

//root message window position
var ROOT_MES_POS_X = 200;
var ROOT_MES_POS_Y = 600;

//ゲームウインドウサイズ
var WIDTH = 960;
var HEIGHT = 720;

//メッセージウインドウサイズ
var MESSAGE_WINDOW_SIZE_X = 600;
var MESSAGE_WINDOW_SIZE_Y = 80;
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


//テスト文字列

var msglabel;
msglabel = new Label();
msglabel.font = "32px monospace";
msglabel.color = "#000000";
msglabel.x = MESSAGE_WINDOW_POSITION_X + MESSAGE_MARGIN_X;
msglabel.y = MESSAGE_WINDOW_POSITION_Y + MESSAGE_MARGIN_Y;

var site_mes;
site_mes = new Label();
site_mes.font = "16px monospace";
site_mes.color = "#000000";
site_mes.text = "";
site_mes.x = MESSAGE_WINDOW_POSITION_X +10;
site_mes.y = MESSAGE_WINDOW_POSITION_Y +5;

var turn_mes;
turn_mes = new Label();
turn_mes.font = "32px monospace";
turn_mes.color = "#000000";
turn_mes.text = "Owner :";
turn_mes.x = 200 ;
turn_mes.y = 200 ;

var root_mes;
root_mes = new Label();
root_mes.font = "16px monospace";
root_mes.width = 600;
root_mes.color = "#000000";
root_mes.text = "Owner :<br>a";
root_mes.x = MESSAGE_WINDOW_POSITION_X +10;
root_mes.y = MESSAGE_WINDOW_POSITION_Y +5;

