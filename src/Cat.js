var Cat = cc.Sprite.extend({
	ctor: function(x,y){
	   this._super();
       this.initWithFile('images/cat11.png');
	   this.x = x;
	   this.y = y;
       this.speed = 10;
       this.direction = Cat.MOVE.STILL;
       this.idle();
	   this.updatePosition();
    },

    idle: function(){
        var catAnimation = new cc.Animation.create();
        catAnimation.setDelayPerUnit(0.2);
        catAnimation.addSpriteFrameWithFile('images/cat11.png');
        catAnimation.addSpriteFrameWithFile('images/cat22.png');
        catAnimation.addSpriteFrameWithFile('images/cat33.png');
        catAnimation.addSpriteFrameWithFile('images/cat44.png');

        if( this.catAnimate ) this.stopAction ( this.catAnimate );
        this.catAnimate = cc.RepeatForever.create(cc.Animate.create(catAnimation));
        this.runAction(this.catAnimate);
    }, 
	updatePosition: function() {

        this.setPosition(cc.p(this.x, this.y));
    },
    update : function(dt){
        
    	 switch(this.direction){
    		case Cat.MOVE.UP:
    	           this.y += this.speed;
    		       break;
    		case Cat.MOVE.DOWN:
    		      this.y -= this.speed;
    		      break;
    		case Cat.MOVE.RIGHT:
    		      this.x += this.speed;
    		      break;
    		case Cat.MOVE.LEFT:
    		      this.x -= this.speed;
    		      break;
    		default:
    		      break;
    	   }


            this.updatePosition();
        
    },

    setDirection: function(dir){

        this.direction = dir;
        
    },
    
   
    
});

Cat.MOVE = {
    UP : 1,
    RIGHT : 2,
    LEFT : 3,
    DOWN : 4,
    STILL : 0
};