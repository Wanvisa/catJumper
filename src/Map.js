var Map = cc.Sprite.extend({
	ctor: function(gameLayer){
		this._super();
		this.gameLayer = gameLayer;
		this.cat = gameLayer.cat;
	
        this.speedLevel = 0.0;
		this.childs = [];
        this.score = 0;
		this.WIDTH = 20;
		this.HEIGHT = 30;
		this.Area = 40;
		this.WallX = 0;
		this.WallY = 0;

		array[0] = [
	    '....................',
	    '....................',
	    '....................',
	    '....................',
	    '....................',
	    '....................',
	    '....................',
	    '....................',
	    '....................',
	    '....................',
	    '....................',
	    '....................',
	    '....................',
	    '....................',
	    '....................',
		];
		array[1] = [
		'....................',
		'....................',
		'....................',
		'....................',
		'....................',
		'....................',
		'....................',
		'######oooooooo######',
		'#####oooooooooo#####',
		'####oooooooooooo####',
		'....................',
		'.......ooooooo......',
		'..oooooo....oooooo..',
		'..oooooo....oooooo..',
		'....................',
		'....................',
		'...##############...',
		'...##############...',
		'oooo............oooo',
		'ooo..............ooo',
		'oo................oo',
		'o..................o',
		'######oooooooo######',
		'#####oooooooooo#####',
		'####oooooooooooo####',
		'....................',
		'...####ooooooo####...',
		'..oooooo....oooooo..',
		'..oooooo....oooooo..',
		'.###............###.',
		];
		array[2] = [
	    '#..h..',
		'..o..#',
		'.o....',
		'#...o.',
		'.oo..#',
		'....oo',
		'....h.',
		'.....#',
		];
		array[3] = [
	    '#.....',
		'.ho..#',
		'#..o..',
		'....o.',
		'.h...#',
		'....oo',
		'#...o.',
		'.....#',
		];
		array[4] = [
	    '#..oo.',
		'.oo..#',
		'#..o..',
		'.ho..#',
		'#..o..',
		'..o..#',
		'#...h.',
		'...oh.',
		];
	  	this.GAMEMAP = array[0];
	  	// this.randomMap();


	  	this.setAnchorPoint(cc.p(0,0)); 
	},
	update: function(dt){

	

		var posy = this.getPositionY();

				if(posy <= -1200){
					console.log("map2222222222222");
					this.randomMap();
		 			this.setPositionY(900);
		 		}

				else{

            		this.setPositionY(posy - (5 + this.speedLevel ) );
				}
	},
	randomMap: function(){
		
		for (var i=0; i<this.childs.length; i++)
		{
			this.removeChild(this.childs[i]);
		}
		this.childs = [];


		var num = Math.floor(Math.random()*5);
		// test map
		console.log( 'random: ' + num );
		this.GAMEMAP = array[1];
        this.speedLevel+=0.1;
     


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
	  			this.item.setPosition(cc.p(c*40+25,r*40+28));
	  			this.addChild(this.item);
	  			this.item.scheduleUpdate();
	  			this.childs.push(this.item);
	  		}

	  		else if(this.GAMEMAP[r][c]=='h'){
	  			this.heart = new Heart(this);
	  			this.heart.setAnchorPoint(cc.p(0,0));
	  			this.heart.setPosition(cc.p(c*40,r*40));
	  			this.addChild(this.heart);
	  			this.heart.scheduleUpdate();
	  			this.childs.push(this.heart);

	  		}
	  		
	  	}
	}
	

});
var array = [];