var BackGround = cc.Sprite.extend({
	ctor: function(){
		this._super();
		this.initWithFile('images/BG.gif');

	},
	update: function(dt){

			
			var posy = this.getPositionY();

				if(posy <= -600){
		 	
		 			if(this.BG1){

		 				this.setPositionY(0);
					}
					else{

		 				this.setPositionY(590);
					}
		 		}

				else{

            		this.setPositionY(posy - 5);
				}
			
		},

})