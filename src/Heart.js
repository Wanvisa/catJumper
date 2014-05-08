var Heart = cc.Sprite.extend({
	ctor: function(map){
		this._super();
		this.initWithFile('images/heart.gif');
		this.map = map;
		this.cat = map.cat;
	},
	 hit:function(cat){
      var catPosX = cat.getPositionX();
      var catPosY = cat.getPositionY();
      var myPosX = this.map.getPositionX() + this.getPositionX();
      var myPosY = this.map.getPositionY() +this.getPositionY();

   return this.checkPlayerHeartCollision( catPosX, catPosY, myPosX, myPosY );
     
  },
  checkPlayerHeartCollision : function( playerX, playerY, itemX, itemY ) {
    return ( ( Math.abs( playerX - itemX ) <= 50 ) &&
     ( Math.abs( playerY - itemY ) <= 50 ) );
      
},
  update : function(dt){
  
    if(this.hit(this.cat))
    {
      this.getParent().removeChild(this);
    }
  }
});