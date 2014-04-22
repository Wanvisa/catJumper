var Background = cc.Sprite.extend({

		ctor: function(){
			
		this._super();
		this.started = false;
        this.initWithFile('images/BG.gif');

		},

		update: function(dt){

			if(this.started){

				var posy = this.getPositionY();

				if(posy >= 600){
		 	
		 			if(this.gameBG){

		 				this.setPositionY(0);
					}
					else{

		 				this.setPositionY(-590);
					}
		 		}

				else{

            		this.setPositionY(posy + 5);
				}
			}
		},

		start : function(){

        	this.started = true;
    	},

    	stop : function(){

        	this.started = false;
        },
});