var checkPlayerWallCollision = function( playerX, playerY, WallX, WallY ) {
    return ( ( Math.abs( playerX - WallX ) <= 330 ) &&
		 ( Math.abs( playerY - WallY ) <= 73 ) );
};