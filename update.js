
function update() {

	if(areMoving) {
		for(var i = 0; i < broiKubove; i++) {
			kub[i].x += kub[i].vx;
			kub[i].y += kub[i].vy;
			kub[i].z += kub[i].vz;
		}
	}

	setTimeout(update, 10);
}

update();
