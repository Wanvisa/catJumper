var Item = cc.Sprite.extend({
	ctor:function(){
		this._super();
		this.initWithFile('images/items.gif');
	},

	randomPosition : function(){
		var posx = 1 + Math.floor(Math.random() * 800);
		var posy = 1 + Math.floor(Math.random() * 600);
		this.setPosition(new cc.Point(posx,posy));
	},


});