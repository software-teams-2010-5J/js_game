enchant();

var SPRITE_WIDTH  = 320;
var SPRITE_HEIGHT = 280;
var BACKGROUND_COLOR = 'rgb(185, 130, 190)';
var WINDOWS_LINE_COLOR = 'rgb(235, 140, 70)'
var WINDOWS_LINE_COLOR_SHADE = "black"
var WINDOW_COLOR = 'rgb(251, 215, 157)'
    
/**
 * ロード
 */
window.onload = function()
{
    // ゲームクラスを生成
    var game = new Game(SPRITE_WIDTH, SPRITE_HEIGHT);
    
    game.onload = function(){
        // TODO: ここにゲーム初期化処理をかきこんでいく
    }

    game.rootScene.addChild(new BaseMessageWindow(300, 100, 10, 20));
    game.rootScene.addChild(new BaseMessageWindow(80, 70, 10, 200));
    game.rootScene.backgroundColor = BACKGROUND_COLOR;
    game.start();
}

/**
 * メッセージ画面クラス
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
        surface.context.fill();			     // 描画

        surface.context.beginPath();
        surface.context.rect(4, 4, width-7, height-7);
        surface.context.fillStyle = WINDOW_COLOR; // 色指定
        surface.context.shadowColor = WINDOWS_LINE_COLOR_SHADE;
        surface.context.shadowBlur = 1;
        surface.context.shadowOffsetX = -1;
        surface.context.shadowOffsetY = -1;
        surface.context.fill();			     // 描画

        // 表示位置設定
        this.x = x;
        this.y = y;
        this.image = surface;

        this.counter = 1;
    }
/*    ,
    onenterframe:function() {
        this.counter++;
        this.counter = this.counter % 30;

        if (this.counter <= 15) {
            this.x++;
        }
        else {
            this.x--;
        }
    }
*/
});


/*
//        alert('height : ' + bottom);

function makeBaseWindowByClass() {
    return new BaseMessageWindow(300, 150, 100, 70);
}

function makeBaseWindow() {
	var sprite  = new Sprite(SPRITE_WIDTH, SPRITE_HEIGHT);	// スプライト生成
	var surface = new Surface(SPRITE_WIDTH, SPRITE_HEIGHT);	// サーフェス生成

	surface.context.beginPath();
	surface.context.rect(20, 30, 180, 150);
	surface.context.fillStyle = "orange"; // 色指定

	surface.context.shadowColor = WINDOWS_LINE_COLOR_SHADE;
	surface.context.shadowBlur = 1;
	surface.context.shadowOffsetX = 1;
	surface.context.shadowOffsetY = 1;
	surface.context.fill();			     // 描画
    
	surface.context.beginPath();
	surface.context.rect(24, 34, 173, 143);
	surface.context.fillStyle = WINDOW_COLOR; // 色指定

	surface.context.shadowColor = WINDOWS_LINE_COLOR_SHADE;
	surface.context.shadowBlur = 1;
	surface.context.shadowOffsetX = -1;
	surface.context.shadowOffsetY = -1;
	surface.context.fill();			     // 描画

    sprite.image = surface;
    
    return sprite;
}
*/