var Item = cc.Sprite.extend({
	ctor:function(){
		this._super();
		this.initWithFile('images/items.gif');
	},

	randomPosition : function(){
		var posx = 1 + Math.floor(Math.random() * 800);
		var posy = 1 + Math.floor(Math.random() * 400);
		this.setPosition(new cc.Point(posx,posy));
	},
   hit:function(cat){
      var catPos = cat.getPosition();
      var myPosX = this.getPositionX();
      var myPosY = this.getPositionY();
      return this.checkPlayerItemCollision( catPos.x, catPos.y, myPosX, myPosY );
     
  },
  checkPlayerItemCollision : function( playerX, playerY, itemX, itemY ) {
    return ( ( Math.abs( playerX - itemX ) <= 65 ) &&
		 ( Math.abs( playerY - itemY ) <= 70 ) );
}

});