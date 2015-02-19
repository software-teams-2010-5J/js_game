enchant();
window.onload = function() {
    var game = new Game(320, 420);
    game.fps = 30;

    game.onload = function() {
        var hello = new Label("Hello, rootScene");
        hello.x = 10;
        hello.y = 10;
        game.rootScene.backgroundColor = "#FFFFFF";
        game.rootScene.addChild(hello);

        // 二つ目のシーン
        var second = new Scene();
        second.backgroundColor = "#FF9999";
        var secondMessage = new Label("Hello, secontScene");
        secondMessage.x = 10;
        secondMessage.y = 10;
        second.addChild(secondMessage);

        // 三つ目のシーン
        var third = new Scene();
        third.backgroundColor = "#99FF99";
        var thirdMessage = new Label("Hello, thirdScene");
        thirdMessage.x = 10;
        thirdMessage.y = 10;
        third.addChild(thirdMessage);

        // ルートシーンをタッチした時の処理
        game.rootScene.addEventListener('touchstart', function() {
		game.pushScene(second);
	    });

        // 二つ目のシーンをタッチした時の処理
        second.addEventListener('touchstart', function() {
		game.replaceScene(third);
	    });

    };

    game.start();
}