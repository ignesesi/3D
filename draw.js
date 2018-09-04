
function draw () {
	context.clearRect (0, 0, canvas.width, canvas.height);
    context.globalAlpha = 1;
 
    context.fillStyle = "#05ebfc";
    context.fillRect (0, 0, screenSizeX, centerY);

    context.fillStyle = "#05fc6c";
	context.fillRect (0, centerY, screenSizeX, screenSizeY);

	context.drawImage(nebe,0,0,screenSizeX,screenSizeY);
	

	for(var i = 0; i < broiKubove; i++) {
		var x = kub[i].x, y = kub[i].y, z = kub[i].z;
		var w = kub[i].w, h = kub[i].h, c = kub[i].c;

		//otpred
		context.fillStyle = "#000";
		context.fillRect (centerX, centerY, 3, 3);
		
		var z1 = z - 0.1;
		
		if(isKub){	
			//otpred
			context.beginPath();
			context.moveTo(centerX + x*z, centerY + y*z);
			context.lineTo(centerX + x*z + w*z, centerY + y*z);
			context.lineTo(centerX + x*z + w*z, centerY + y*z + h*z);
			context.lineTo(centerX + x*z, centerY + y*z + h*z);
			context.fill();
			//otzad
			context.beginPath();
			context.moveTo(centerX + x*z1, centerY + y*z1);
			context.lineTo(centerX + x*z1 + w*z1, centerY + y*z1);
			context.lineTo(centerX + x*z1 + w*z1, centerY + y*z1 + h*z1);
			context.lineTo(centerX + x*z1, centerY + y*z1 + h*z1);
			context.fill();
			//gore
			context.beginPath();
			context.moveTo(centerX + x*z, centerY + y*z);
			context.lineTo(centerX + x*z + w*z, centerY + y*z);
			context.lineTo(centerX + x*z1 + w*z1, centerY + y*z1);
			context.lineTo(centerX + x*z1, centerY + y*z1);
			context.fill();
			//dolu
			context.beginPath();
			context.moveTo(centerX + x*z, centerY + y*z + h*z);
			context.lineTo(centerX + x*z + w*z, centerY + y*z + h*z);
			context.lineTo(centerX + x*z1 + w*z1, centerY + y*z1 + h*z1);
			context.lineTo(centerX + x*z1, centerY + y*z1 + h*z1);
			context.fill();
			//dqsno
			context.beginPath();
			context.moveTo(centerX + x*z + w*z, centerY + y*z);
			context.lineTo(centerX + x*z + w*z, centerY + y*z + h*z);
			context.lineTo(centerX + x*z1 + w*z1, centerY + y*z1 + h*z1);
			context.lineTo(centerX + x*z1 + w*z1, centerY + y*z1);
			context.fill();
			//lqvo
			context.beginPath();
			context.moveTo(centerX + x*z, centerY + y*z);
			context.lineTo(centerX + x*z, centerY + y*z + h*z);
			context.lineTo(centerX + x*z1, centerY + y*z1 + h*z1);
			context.lineTo(centerX + x*z1, centerY + y*z1);
			context.fill();
		}else{
			//otpred
			context.beginPath();
			context.moveTo(centerX + x*z, centerY + y*z);
			context.lineTo(centerX + x*z + w*z, centerY + y*z);
			context.lineTo(centerX + x*z, centerY + y*z + h*z);
			context.lineTo(centerX + x*z + w*z, centerY + y*z + h*z);
			context.fill();
			//otzad
			context.beginPath();
			context.moveTo(centerX + x*z1, centerY + y*z1);
			context.lineTo(centerX + x*z1 + w*z1, centerY + y*z1);
			context.lineTo(centerX + x*z1, centerY + y*z1 + h*z1);
			context.lineTo(centerX + x*z1 + w*z1, centerY + y*z1 + h*z1);
			context.fill();
			//gore
			context.beginPath();
			context.moveTo(centerX + x*z, centerY + y*z);
			context.lineTo(centerX + x*z + w*z, centerY + y*z);
			context.lineTo(centerX + x*z1, centerY + y*z1);
			context.lineTo(centerX + x*z1 + w*z1, centerY + y*z1);
			context.fill();
			//dolu
			context.beginPath();
			context.moveTo(centerX + x*z, centerY + y*z + h*z);
			context.lineTo(centerX + x*z + w*z, centerY + y*z + h*z);
			context.lineTo(centerX + x*z1, centerY + y*z1 + h*z1);
			context.lineTo(centerX + x*z1 + w*z1, centerY + y*z1 + h*z1);
			context.fill();
			//dqsno
			context.beginPath();
			context.moveTo(centerX + x*z + w*z, centerY + y*z);
			context.lineTo(centerX + x*z + w*z, centerY + y*z + h*z);
			context.lineTo(centerX + x*z1 + w*z1, centerY + y*z1);
			context.lineTo(centerX + x*z1 + w*z1, centerY + y*z1 + h*z1);
			context.fill();
			//lqvo
			context.beginPath();
			context.moveTo(centerX + x*z, centerY + y*z);
			context.lineTo(centerX + x*z, centerY + y*z + h*z);
			context.lineTo(centerX + x*z1, centerY + y*z1);
			context.lineTo(centerX + x*z1, centerY + y*z1 + h*z1);
			context.fill();
		}
	}

	context.drawImage(prozorec,0,0,screenSizeX,screenSizeY);
	//gore lqvo
	/*var a = (x*z) / (y*z);
	var b = centerY*a - centerX;
	for(var i = centerX + x*z; i <= centerX; i++) {
		context.fillRect (i, a*i - b, 1, 1);
	}

	//gore dqsno
	var a = (x*z + w*z) / (y*z);
	var b = centerY*a - centerX;
	for(var i = x*z + w*z; i <= x*z + w*z + centerX; i++) {
		context.fillRect (i, a*i + b, 1, 1);
	}

	//dolu lqvo
	var a = (x*z) / (y*z + h*z);
	var b = centerY*a - centerX;
	for(var i = x*z; i <= x*z + centerX; i++) {
		context.fillRect (i, a*i + b, 1, 1);
	}

	//dolu dqsno
	var a = (x*z + w*z) / (y*z + h*z);
	var b = centerY*a - centerX;
	for(var i = x*z + w*z; i <= x*z + w*z + centerX; i++) {
		context.fillRect (i, a*i + b, 1, 1);
	}
	*/
	/*
        context.fillText("GAME OVER", positionX + scale, positionY + 15 * scale);
        context.font="30pt Monospace";
        context.fillText("Press R to", positionX + 2 * scale, positionY + 19 * scale);
        context.fillText("restart", positionX + 4 * scale, positionY + 21 * scale);
 
    context.fillStyle = colors [0]; 
    context.font="18pt Monospace";
    context.fillText("Points: " + points, positionX + scale, positionY + scale * 2);
    //context.fillText(points, positionX + scale * 5, positionY + scale * 2);
 	*/
    window.requestAnimationFrame (draw);
}

draw();
