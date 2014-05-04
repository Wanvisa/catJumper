var Wall = cc.Sprite.extend({
	ctor: function(){
    this._super();
    this.started = false;
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

      if(this.started){

        posy = this.getPositionY();

          if(posy<-10){

            this.randomPositionx();
            // posy = 550;

          }
          else{

            this.setPosition(new cc.Point(this.getPositionX(),posy-5));

          }
      }
  },

  randomPositionx:function(){
     // console.log(this.getPositionX());
      if(this.getPositionX()<=0){

          //var posx = (Math.floor(Math.random()*200)+50)*-1;
          this.setPosition(new cc.Point(-100,550));

         // console.log("aaaa");

      }
      else{

          //var posx = Math.floor(Math.random()*350)+600;
          this.setPosition(new cc.Point(800,550));
         // console.log("bbbb");
      }
      
  },

   start : function(){

        this.started = true;
    },

  stop : function(){

        this.started = false;

      },

  hit:function(cat){

      var catPos = cat.getPosition();
      var myPos = this.getPosition();
      return checkPlayerPillarCollision( catPos.x, catPos.y, myPos.x, myPos.y );
     
  }
  // hitItem:function(item){

  //     var itemPos = item.getPosition();
  //     var myPos = this.getPosition();
  //     return checkPlayerWallCollision( itemPos.x, itemPos.y, myPos.x, myPos.y );
     
  // },
  // checkPlayerWallCollision : function( itemX, itemY, posX, posY ) {
  //   return ( ( Math.abs( itemX - posX ) <= 340 ) &&
  //    ( Math.abs( itemY - posY ) <= 66 ) );
//}
});