var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );

         
        this.gameBG = new Background();
        this.gameBG.setAnchorPoint( cc.p( 0,0 ));
        this.gameBG.setPosition( cc.p( 0,0 ));
        this.addChild(this.gameBG);
        this.gameBG.start();
        //this.gameBG.scheduleUpdate();

        this.gameBG2 = new Background();
        this.gameBG2.setAnchorPoint( cc.p( 0,0 ));
        this.gameBG2.setPosition( cc.p(0,-600 ));
        this.addChild(this.gameBG2);
        this.gameBG2.start();
        //this.gameBG2.scheduleUpdate();

        this.state = GameLayer.STATES.FRONT;

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
        this.scheduleUpdate();

        return true;
    },

    onKeyDown: function( e ) {

        if(this.state == GameLayer.STATES.FRONT){

                this.state == GameLayer.STATES.STARTED;
                this.startGame();
        }

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

    startGame : function(){

       this.gameBG.scheduleUpdate();
       this.gameBG2.scheduleUpdate();
       this.wallRight.scheduleUpdate();
       this.wallLeft.scheduleUpdate();

     },

    onKeyUp : function(e){

           this.cat.setDirection( Cat.MOVE.STILL );
    },

    createWall : function(){

         //  console.log("in in in");
        this.wallLeft = new Wall();
        this.wallLeft.setAnchorPoint(new cc.Point(0,0.5))
        this.wallLeft.setPosition(new cc.Point(-120,100));
        this.addChild(this.wallLeft);
        this.wallLeft.start();
        
        

        this.wallRight = new Wall();
        this.wallRight.setAnchorPoint(new cc.Point(1,0.5))
        this.wallRight.setPosition(new cc.Point(950,300));
        this.addChild(this.wallRight);
        this.wallRight.start();
       
        
    },

    update : function(dt){

        
            if(this.wallLeft&&this.wallRight&&(this.wallLeft.hit(this.cat)||this.wallRight.hit(this.cat)))
            {
                 this.endGame();
                 this.state = GameLayer.STATES.DEAD;
                // alert("hittt");

            }
            
        
    },
    endGame : function(){
       this.gameBG.stop();
       this.gameBG2.stop();
       this.wallLeft.stop();
       this.wallRight.stop();
    }
});

        var StartScene = cc.Scene.extend({
    onEnter: function(){
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});
GameLayer.STATES = {
    FRONT:1,
    STARTED:2,
    DEAD:3
};


