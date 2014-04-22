var Wall = cc.Sprite.extend({
	ctor: function(){
    this._super();
    this.initWithFile('images/Wall.png');
    // this.leftWall = cc.Sprite.create('images/Wall.png');
    // this.leftWall.setAnchorPoint(new cc.Point(0.5,0));
    // this.leftWall.setPosition(new cc.Point(100,0));
    // this.addChild(this.leftWall);


    // this.RightWall = cc.Sprite.create('images/Wall.png');
    // this.RightWall.setAnchorPoint(new cc.Point(0.5,0));
    // this.RightWall.setPosition(new cc.Point(-100,0));
    // this.addChild(this.RightWall);
    //this.setScale(0.1);
	},
    update:function(dt){
      posy = this.getPositionY();
      if(posy<-10)
      {

          this.randomPositionx();
         // posy = 550;
      }
      else
        {
          this.setPosition(new cc.Point(this.getPositionX(),posy-5));
        }
    },
    randomPositionx:function()
    {
      if(this.getPositionX<=0)
      {
          var posx = Math.floor(Math.random()*200)+300*-1;
          this.setPosition(new cc.Point(posx,550));
          //console.log("aaaa");
      }
      else 
      {
          var posx = Math.floor(Math.random()*350)+200;
          this.setPosition(new cc.Point(posx,550));
          //console.log("bbbb");
      }
      
    },
    hit:function(cat)
    {
      var catPos = cat.getPosition();
      var myPos = this.getPosition();
      return checkPlayerPillarCollision( catPos.x, catPos.y, myPos.x, myPos.y );
     
    }


	
});