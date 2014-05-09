var GameLayer = cc.LayerColor.extend({
    
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.state = GameLayer.STATES.FRONT; 

        this.setTouchEnabled(true);
        this.setTouchMode(1);
        

        this.BG1 = new BackGround();
        this.BG1.setAnchorPoint(cc.p(0,0));
        this.BG1.setPosition(cc.p(0,0));
        this.addChild(this.BG1);
        
        
        this.BG2 = new BackGround();
        this.BG2.setAnchorPoint(cc.p(0,0));
        this.BG2.setPosition(cc.p(0,600));
        this.addChild(this.BG2);
        

        this.cat = new Cat(400,200);
        this.cat.setAnchorPoint(cc.p(0.5,0.5));
        this.addChild(this.cat);

        this.map1 = new Map(this);
        this.map1.setPosition((new cc.p(0,0)));
        this.addChild(this.map1);
        this.over = false;

        this.map2 = new Map(this);
        this.addChild(this.map2);
        this.map2.setPosition(new cc.p(0,-1000));
      

        this.score = 0;
        this.scoreLabel = cc.LabelTTF.create( '0', 'Arial', 45 );
        this.scoreLabel.setPosition( new cc.Point( 570, 170 ) );
        this.scoreLabel.setColor( new cc.Color3B( 50, 205, 50) );

        this.setTouchEnabled(true);
        this.setTouchMode(1);
        this.scheduleUpdate();
        this.setKeyboardEnabled( true );
    

    },
    onKeyDown: function( e ) {
        
        if(this.state == GameLayer.STATES.FRONT ){
            this.state = GameLayer.STATES.STARTED;
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
           cc.AudioEngine.getInstance().playMusic( 'Sound/gameSound.wav', true );

            this.BG1.scheduleUpdate();
            this.BG2.scheduleUpdate();
            this.map1.scheduleUpdate();
            this.map2.scheduleUpdate();
            this.cat.scheduleUpdate();

    },
    onKeyUp : function(e){

           this.cat.setDirection( Cat.MOVE.STILL );
    },
    endGame : function(){
        if(this.state == GameLayer.STATES.DEAD){
            for (var i = 0; i<this.map1.childs.length; i++)
                this.map1.childs[i].removeFromParent();
            for (var i = 0; i<this.map2.childs.length; i++)
                this.map2.childs[i].removeFromParent();
            this.setKeyboardEnabled(false);
            this.map1.getScheduler().unscheduleAllCallbacksForTarget(this.map1);
            this.map2.getScheduler().unscheduleAllCallbacksForTarget(this.map2);

            var endPage = cc.Sprite.create('images/overPage.png');
            cc.AudioEngine.getInstance().stopMusic();
            endPage.setAnchorPoint(cc.p(0,0));
            endPage.setPosition(cc.p(0,0));
            this.addChild(endPage, 1);
            this.addChild( this.scoreLabel , 4);
            this.scoreLabel.setString('Score : ' + this.score);
          
            this.over = true;

        }
    },    
        
    onTouchBegan:function( touch, event ) {
        if(this.over){
            var director = cc.Director.getInstance();
            director.replaceScene(cc.TransitionFade.create(1.5, new StartScene()));
        }
    },

    updateScore: function(){
        this.score++;
        this.scoreLabel.setString('Score : ' + this.score);

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
GameLayer.STATES = {
    FRONT: 1,
    STARTED: 2,
    DEAD: 3
};

