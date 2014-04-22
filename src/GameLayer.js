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


        this.wallLeft = null;
        this.wallRight = null;          
        this.createWall();

        // this.item = new Item();
        // this.addChild(this.item);
        // this.item.randomPosition();
        
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
    },
    createWall : function(){
      //  console.log("in in in");
        this.wallLeft = new Wall();
        this.wallLeft.setAnchorPoint(new cc.Point(0,0.5))
        this.wallLeft.setPosition(new cc.Point(-120,0));
        this.addChild(this.wallLeft);
        this.wallLeft.scheduleUpdate();
        

        this.wallRight = new Wall();
        this.wallRight.setAnchorPoint(new cc.Point(1,0.5))
        this.wallRight.setPosition(new cc.Point(600,200));
        this.addChild(this.wallRight);
        this.wallRight.scheduleUpdate();
        this.scheduleUpdate();
    },
    update : function(dt){
        if(this.wallLeft&&this.wallRight&&(this.wallLeft.hit(this.cat)||this.wallRight.hit(this.cat))){
            alert("hittt");
        }
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

