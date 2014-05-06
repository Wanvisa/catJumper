var GameLayer = cc.LayerColor.extend({
    
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );

        this.BG1 = new BackGround();
        this.BG1.setAnchorPoint(cc.p(0,0));
        this.BG1.setPosition(cc.p(0,0));
        this.addChild(this.BG1);
        this.BG1.scheduleUpdate();

        this.BG2 = new BackGround();
        this.BG2.setAnchorPoint(cc.p(0,0));
        this.BG2.setPosition(cc.p(0,600));
        this.addChild(this.BG2);
        this.BG2.scheduleUpdate();

        this.cat = new Cat(400,200);
        this.cat.setAnchorPoint(cc.p(0.5,0.5));
        this.addChild(this.cat);

        this.map1 = new Map(this);
        this.map1.setPosition((new cc.p(0,0)));
        this.addChild(this.map1);
        this.map1.scheduleUpdate();

        this.map2 = new Map(this);
        this.addChild(this.map2);
        this.map2.setPosition(new cc.p(0,-1000));
        this.map2.scheduleUpdate();

        
        this.cat.scheduleUpdate();

        this.setKeyboardEnabled( true );
    

    },
    onKeyDown: function( e ) {

       
        switch( e ) {
        case cc.KEY.left:
                this.cat.setDirection( Cat.MOVE.LEFT );
                break;
        case cc.KEY.right:
                this.cat.setDirection( Cat.MOVE.RIGHT );
                break;
        case cc.KEY.up:
                this.cat.setDirection( Cat.MOVE.UP );
                 break;
        case cc.KEY.down:
                this.cat.setDirection( Cat.MOVE.DOWN );
                 break;
        }
    },
     onKeyUp : function(e){

           this.cat.setDirection( Cat.MOVE.STILL );
    },

});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});

