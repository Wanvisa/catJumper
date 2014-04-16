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
         var posy = this.getPositionY();
        if(posy<-100)
        { 
            this.randomPositiony();
        }
        else
        {
            this.setPositionX(posy-5);
        }
    }
	
});