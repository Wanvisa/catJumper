var Wall = cc.Sprite.extend({
	ctor : function(map){
	  this._super();
	  this.initWithFile('images/WallTest.png');
	  this.map = map;
	  this.cat = map.cat;

	},
	hit:function(cat){
      var catPosX = cat.getPositionX();
      var catPosY = cat.getPositionY();
      var myPosX = this.map.getPositionX() + this.getPositionX();
      var myPosY = this.map.getPositionY() + this.getPositionY();

   return this.checkPlayerWallCollision( catPosX, catPosY, myPosX, myPosY );
     
  },
  checkPlayerWallCollision : function( playerX, playerY, wallX, wallY ) {
    return ( (( playerX - wallX ) >= -20 && (playerX - wallX) <= 60  ) &&
     ( ( playerY - wallY ) >= -20 && (playerY - wallY) <= 60  ));
      
},
  update : function(dt){
   
    if(this.hit(this.cat)){
      this.map.gameLayer.state = GameLayer.STATES.DEAD;
      alert("GAME OVER");
    }
  }

});