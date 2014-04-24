var checkPlayerPillarCollision = function( playerX, playerY, catX, catY ) {
    return ( ( Math.abs( playerX - catX ) <= 330 ) &&
		 ( Math.abs( playerY - catY ) <= 73 ) );
};