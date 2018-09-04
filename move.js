
window.addEventListener ("keydown", function (args) {
    console.log (args.keyCode);
	if (args.keyCode == 37) { //strelka nalqvo
		move (5, 0, 0);
	}
	if (args.keyCode == 39) { //strelka nadqsno
		move (-5, 0, 0);
	}
	if (args.keyCode == 40) { //strelka nadolu
		move (0, -5, 0);
	}
	if (args.keyCode == 38) { //strelka nagore
		move (0, 5, 0);
	}
	if (args.keyCode == 87) { //w
		move (0, 0, 0.01);
	}
	if (args.keyCode == 83) { //s
		move (0, 0, -0.01);
	}
	
	if (args.keyCode == 13) { //enter
		isKub = !isKub;
	}
	if(args.keyCode == 32) {
		areMoving = !areMoving;
		if(areMoving) {
			promeniSkorosti();
		}
	}

	if(args.keyCode == 82) { //r
		restart();
	}


}, false);

function move(x,y,z) {
	for(var i = 0; i < broiKubove; i++) {
		kub[i].x += x;
		kub[i].y += y;
		kub[i].z += z;
	}
}

function promeniSkorosti() {
	for(var i = 0; i < broiKubove; i++) {
		if(Math.random() < 0.33) {
			kub[i].vx = 5;
			if(Math.random() < 0.5) {
				kub[i].vx *= (-1);
			}
			
		}
		if(Math.random() < 0.33) {
			kub[i].vy = 5;
			if(Math.random() < 0.5) {
				kub[i].vy *= (-1);
			}

		}
		if(Math.random() < 0.33) {
			kub[i].vz = 0.01;
			if(Math.random() < 0.5) {
				kub[i].vz *= (-1);
			}
		}
	}	
}

