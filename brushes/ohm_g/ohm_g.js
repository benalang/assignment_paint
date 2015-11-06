////////////////////////////////////////////////////////////////////
// ohm_g.js
//
// basic ohm_g tool: spits at the canvas in user chosen color at random size
// author: Ben Avery Lang



////////////////////////////////////////////////////////////////////
// create and install brush

var ohm_g = new Brush("ohm_g", "./brushes/ohm_g/ohm_g.svg");
brushes.push(ohm_g);
var song;



////////////////////////////////////////////////////////////////////

//load sound
ohm_g.setup = function() {
	song = loadSound('./brushes/ohm_g/drool.wav');
};

// define brush behavior
ohm_g.draw = function() {
	fill(forecolor);
	noStroke();

	if (mouseIsPressed && mouseX > 0 && mouseY > 0) {

		//play sound
		song.play();

		//draw central ellipse
		ellipse(pmouseX, pmouseY, 200, 200);

		//create secondary array of objects
		for (var i = 0; i < 3; i++) {
			var offsetX = random(-350, 350);
			var offsetY = random(-275, 275);
			var ellipseSize = random(25, 120);
			ellipse(mouseX + offsetX, mouseY + offsetY, ellipseSize, ellipseSize);
		}
	}
};
