var areMoving, isKub;

class kubove {
	constructor(x=0,y=0,z=0,w=10,h=10,d=10,vx=0,vy=0,vz=0) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;
		this.h = h;
		this.d = d;
	}
}

var kub = [], broiKubove = 25;

for(var i = 0; i < broiKubove; i++) {
	kub[i] = new kubove();
}

