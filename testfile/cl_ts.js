
// constructor
var hoge = function(arg) {
    this.x = 5;
    this.y = 10;
    this.z = arg;
};

// メソッド
hoge.prototype = {
    f1: function() {
	return true;
    },
    f2: function() {
	return false;
    }
};

var instance = new hoge(1);
// hoge {x: 5, y: 10, z: 1, f1: function, f2: function}
