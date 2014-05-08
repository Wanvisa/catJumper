var Item = cc.Sprite.extend({
	ctor:function(map){
    this.map = map;
    this.cat = map.cat;
		this._super();
    this.idle();
		this.initWithFile('images/Coin.png');
    
	},
   
	idle : function(){
    var itemAnimation = new cc.Animation.create();
    itemAnimation.addSpriteFrameWithFile('images/Coin.png');
    itemAnimation.addSpriteFrameWithFile('images/Coin2.png');
    itemAnimation.setDelayPerUnit( 0.3 );

    this.action = new cc.RepeatForever.create( cc.Animate.create( itemAnimation ) );
    this.runAction(this.action);
  },

   hit:function(cat){
      var catPosX = cat.getPositionX();
      var catPosY = cat.getPositionY();
      var myPosX = this.map.getPositionX() + this.getPositionX();
      var myPosY = this.map.getPositionY() +this.getPositionY();

   return this.checkPlayerItemCollision( catPosX, catPosY, myPosX, myPosY );
     
  },
  checkPlayerItemCollision : function( playerX, playerY, itemX, itemY ) {
    if ( ( Math.abs( playerX - itemX ) <= 40 ) &&
     ( Math.abs( playerY - itemY ) <= 40 ) )
    {
      this.map.gameLayer.updateScore();
      return true;
    }
    return false;
      
},
  update : function(dt){
    
    if(this.hit(this.cat)){

        var itemAnimation = new cc.Animation.create();
        itemAnimation.addSpriteFrameWithFile('images/CoinAnimate.png');
        itemAnimation.setDelayPerUnit( 100 );
        this.action2 = cc.Animate.create( itemAnimation ) ;
        this.runAction(this.action2);
         cc.AudioEngine.getInstance().playEffect( 'Sound/CoinSound.mp3' );

      this.scheduleOnce(function(){
       this.removeFromParent();
      },0.1);


    }
  }


});