var Cat = cc.Sprite.extend({
	ctor: function(x,y){
	   this._super();
       this.started = false;
       this.initWithFile('images/catt.gif');
	   this.x = x;
	   this.y = y;
       this.direction = Cat.MOVE.STILL;
	   this.updatePosition();
    },

	updatePosition: function() {

        this.setPosition(cc.p(this.x, this.y));
    },
    update : function(dt){
         if(this.started)
         {
    	   switch(this.direction){
    		  case Cat.MOVE.UP:
    	           this.y += 12;
    		       break;
    		case Cat.MOVE.DOWN:
    		      this.y -= 12;
    		      break;
    		case Cat.MOVE.RIGHT:
    		      this.x += 12;
    		      break;
    		case Cat.MOVE.LEFT:
    		      this.x -= 12;
    		      break;
    		default:
    		      break;
    	   }


            this.updatePosition();
        }
    },

    setDirection: function(dir){

        this.direction = dir;
        
    },

    start : function(){

        this.started = true;
    },

    stop : function(){

        this.started = false;

      },

});

Cat.MOVE = {
    UP : 1,
    RIGHT : 2,
    LEFT : 3,
    DOWN : 4,
    STILL : 0
};