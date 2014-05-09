var Map = cc.Sprite.extend({
	ctor: function(gameLayer){
		this._super();
		this.gameLayer = gameLayer;
		this.cat = gameLayer.cat;
	
		this.childs = [];
        this.score = 0;
		this.WIDTH = 20;
		this.HEIGHT = 30;
		this.Area = 40;
		this.WallX = 0;
		this.WallY = 0;

		this.stage = new Stage();
	  	this.GAMEMAP = this.stage.arrayInit;
	  	this.genMap();

	  	this.setAnchorPoint(cc.p(0,0)); 
	},
	update: function(dt){
		var posy = this.getPositionY();

				if(posy <= -1200){
					
					this.randomMap();
		 			this.setPositionY(900);
		 		}
				else{

            		this.setPositionY(posy - 4 );
				}
	},
	randomMap: function(){
		
		for (var i=0; i<this.childs.length; i++)
		{
			this.removeChild(this.childs[i]);
		}
		this.childs = [];

		var num = Math.floor(Math.random()*4);
		this.GAMEMAP = this.stage.array[num];
		this.genMap();

	},

	genMap: function()
	{
		for(var r = this.HEIGHT-1;r>=0;r--)
		  	for(var c = 0;c<this.WIDTH;c++){
		  		if(this.GAMEMAP[r][c]=='#'){
		  			this.wall = new Wall(this);
		  			this.wall.setAnchorPoint(cc.p(0,0));
		  			this.wall.setPosition(cc.p(c*40,r*40));
		  			this.addChild(this.wall);
		  			this.wall.scheduleUpdate();
		  			this.childs.push(this.wall);
		  		}
		  		else if(this.GAMEMAP[r][c]=='o'){
		  			this.item = new Item(this);
		  			this.item.setAnchorPoint(cc.p(0.5,0.5));
		  			this.item.setPosition(cc.p(c*40+20,r*40+20));
		  			this.addChild(this.item);
		  			this.item.scheduleUpdate();
		  			this.childs.push(this.item);
				}
		  		
		  	}
	}
	

});
