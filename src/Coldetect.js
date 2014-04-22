var checkPlayerPillarCollision = function( playerX, playerY, catX, catY ) {
    return ( ( Math.abs( playerX - catX ) <= 90 ) &&
		 ( Math.abs( playerY - catY ) >= 80 ) );
};