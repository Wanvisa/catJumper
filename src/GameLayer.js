var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );


        this.gameBG = new Background();
        this.gameBG.setAnchorPoint( cc.p( 0,0 ));
        this.gameBG.setPosition( cc.p( 0,0 ));
        this.addChild(this.gameBG);
        this.gameBG.scheduleUpdate();

        this.gameBG2 = new Background();
        this.gameBG2.setAnchorPoint( cc.p( 0,0 ));
        this.gameBG2.setPosition( cc.p(0,-600 ));
        this.addChild(this.gameBG2);
        this.gameBG2.scheduleUpdate();

          

        this.item = new Item();
        this.addChild(this.item);
        this.item.randomPosition();
        
         this.cat = new Cat(200,200);
          this.addChild(this.cat);
         this.cat.scheduleUpdate();
        this.setKeyboardEnabled( true );
        return true;
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
    }
});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});

