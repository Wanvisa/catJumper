var Map = cc.Sprite.extend({
	ctor: function(gameLayer){
		this._super();
		this.gameLayer = gameLayer;
		this.cat = gameLayer.cat;
		this.WIDTH = 6;
		this.HEIGHT = 8;
		this.WallX = 0;
		this.WallY = 0;
		array[0] = [
	    '#.....',
		'..o..#',
		'.ooo..',
		'#...o.',
		'..o..#',
		'....oo',
		'.ooo..',
		'..oo.#',
		];
		array[1] = [
	    '#..h..',
		'..o..#',
		'.oooh.',
		'#...o.',
		'.ho..#',
		'....oo',
		'.oooh.',
		'..oo.#',
		];
	  	this.GAMEMAP = array[1];

	  for(var r = 0;r<this.HEIGHT;r++)
	  	for(var c = 0;c<this.WIDTH;c++){
	  		if(this.GAMEMAP[r][c]=='#'){


	  			this.wall = new Wall(this);
	  			this.wall.setAnchorPoint(cc.p(0,0));
	  			this.wall.setPosition(cc.p(c*100,r*100));
	  			this.addChild(this.wall);
	  			this.wall.scheduleUpdate();

	  			
	  	       

	  		}
	  		else if(this.GAMEMAP[r][c]=='o'){
              

	  			this.item = new Item(this);
	  			this.item.setAnchorPoint(cc.p(0.5,0.5));
	  			this.item.setPosition(cc.p(c*100+25,r*100+28));
	  			this.addChild(this.item);
	  			this.item.scheduleUpdate();
	  		}

	  		else if(this.GAMEMAP[r][c]=='h'){
	  			this.heart = new Heart(this);
	  			this.heart.setAnchorPoint(cc.p(0,0));
	  			this.heart.setPosition(cc.p(c*100,r*100));
	  			this.addChild(this.heart);

	  		}
	  		
	  	}
	  	this.setAnchorPoint(cc.p(0,0)); 
	},
	update: function(dt){

		var posy = this.getPositionY();

				if(posy <= -900){
		 	
		 			if(this.map1){

		 				this.setPositionY(100);
					}
					else{

		 				this.setPositionY(900);
					}
		 		}

				else{

            		this.setPositionY(posy - 5);
				}
	},

});
var array = [];
