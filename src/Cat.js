var Cat = cc.Sprite.extend({
	ctor: function(x,y){
	   this._super();
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
    	switch(this.direction){
    		case Cat.MOVE.UP:
    	      this.y += 5;
    		  break;
    		case Cat.MOVE.DOWN:
    		  this.y -= 5;
    		  break;
    		case Cat.MOVE.RIGHT:
    		  this.x += 5;
    		  break;
    		case Cat.MOVE.LEFT:
    		  this.x -= 5;
    		  break;
    		default:
    		  break;
    	}
    	this.updatePosition();
    },
    setDirection: function(dir)
    {
          this.direction = dir;
    }

});

Cat.MOVE = {
    UP : 1,
    RIGHT : 2,
    LEFT : 3,
    DOWN : 4,
    STILL : 0
};