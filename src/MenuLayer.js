var MenuLayer = cc.Layer.extend({
	ctor: function(){
		this._super();
	},

	init: function(){
		this._super();
		this.setTouchEnabled(true);
        this.setTouchMode(1);

        var director = cc.Director.getInstance();
        var winsize = director.getWinSize();
        var center = cc.p( 400, 300 );
       
        var bg = cc.Sprite.create("images/gameStart.png");
        bg.setPosition( center );
        this.addChild( bg );

       
	},

	

	onTouchBegan:function( touch, event ) {
        var director = cc.Director.getInstance();
        director.replaceScene(cc.TransitionFade.create(1.5, new StartScene()));
    }
});

var MenuScene = cc.Scene.extend({
	ctor: function(){
		this._super();
		var layer = new MenuLayer();
		layer.init();
		this.addChild( layer );
	}
});