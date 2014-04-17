var Wall = cc.Sprite.extend({
	ctor: function(){
    this._super();
    this.leftWall = cc.Sprite.create('images/Wall.png');
    this.leftWall.setAnchorPoint(new cc.Point(0.5,0));
    this.leftWall.setPosition(new cc.Point(100,0));
    this.addChild(this.leftWall);


    this.RightWall = cc.Sprite.create('images/Wall.png');
    this.RightWall.setAnchorPoint(new cc.Point(0.5,0));
    this.RightWall.setPosition(new cc.Point(-100,0));
    this.addChild(this.RightWall);
	},
    update:function(dt){
      posy = this.getPositionY();
      if(posy<0)
      {
        posy = 550;
      }
      this.setPosition(new cc.Point(this.getPositionX(),posy-5));
    },

	
});