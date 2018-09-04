
function generateKubes() {
	for(var i = 0; i < broiKubove; i ++) {
		var x = Math.random()*screenSizeX;
		if(Math.random() < 0.5)	{
			x*=(-1);
		}
		var y = Math.random()*screenSizeY;
		if(Math.random() < 0.5)	{
			y*=(-1);
		}
		
		kub[i].x = x;
		kub[i].y = y;
		kub[i].z = Math.random();
		kub[i].w = 100;
		kub[i].h = 100;
		kub[i].d = 100;
		kub[i].vx = 0;
		kub[i].vy = 0;
		kub[i].vz = 0;
	}
}

function restart() {
	isKub = true;
	areMoving = false;

	generateKubes();
}

restart();
