
var prozorec = new Image();
prozorec.src = "images/window.png";
var nebe = new Image();
nebe.src = "images/nebe.jpg";

var counter = 0;
var imagesCount = 2;

function onImageLoaded (){
     counter++;
    if (counter == imagesCount) {
     	update();
        draw();
    }
}

prozorec.onload = onImageLoaded;
nebe.onload = onImageLoaded;
