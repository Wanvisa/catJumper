var Item = cc.Sprite.extend({
	ctor:function(map){
    this.map = map;
    this.cat = map.cat;
		this._super();
		this.initWithFile('images/items1.gif');
    
	},

	
   hit:function(cat){
      var catPosX = cat.getPositionX();
      var catPosY = cat.getPositionY();
      var myPosX = this.map.getPositionX() + this.getPositionX();
      var myPosY = this.map.getPositionY() +this.getPositionY();

   return this.checkPlayerItemCollision( catPosX, catPosY, myPosX, myPosY );
     
  },
  checkPlayerItemCollision : function( playerX, playerY, itemX, itemY ) {
    if ( ( Math.abs( playerX - itemX ) <= 50 ) &&
     ( Math.abs( playerY - itemY ) <= 50 ) )
    {
      this.map.gameLayer.updateScore();
      return true;
    }
    return false;
      
},
  update : function(dt){
  
    if(this.hit(this.cat)){
      this.getParent().removeChild(this);
    }
  }


});