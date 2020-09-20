const currentGameVersion = "2.4.0";
const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

//Images

const titleImage = new Image();
titleImage.src = "menu/title.png";
const playButtonImage = new Image();
playButtonImage.src = "menu/play_button.png";
const optionsButtonImage = new Image();
optionsButtonImage.src = "menu/options_button.png";
const optionsButtonHoveredImage = new Image();
optionsButtonHoveredImage.src = "menu/options_button_hovered.png";
const backButtonImage = new Image();
backButtonImage.src = "menu/back_button.png";
const optionUpButtonImage = new Image();
optionUpButtonImage.src = "menu/option_up_button.png";
const optionUpButtonHoveredImage = new Image();
optionUpButtonHoveredImage.src = "menu/option_up_button_hovered.png";
const optionDownButtonImage = new Image();
optionDownButtonImage.src = "menu/option_down_button.png";
const optionDownButtonHoveredImage = new Image();
optionDownButtonHoveredImage.src = "menu/option_down_button_hovered.png";
const configureButtonImage = new Image();
configureButtonImage.src = "menu/configure_button.png";
const configureButtonHoveredImage = new Image();
configureButtonHoveredImage.src = "menu/configure_button_hovered.png";

var displayType = 1;

if (typeof(Storage) !== "undefined") {
	
	if (localStorage.displayConfiguration) {
		
		displayType = localStorage.displayConfiguration;
	
	}
	
}

var scaleX = 0;
var scaleY = 0;

var currentScreen;

var mouseX;
var mouseY;

var isMouseLeftClicked;
var isMouseRightClicked;
var isMouseOnCanvas;

var pressedKeys = [];
var releasedKeys = [];

window.addEventListener('keydown', this.keyPressedEvent, false);
window.addEventListener('keyup', this.keyReleasedEvent, false);

function getMousePos(canvas, evt) {
	
	var rect = canvas.getBoundingClientRect();
	
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
	
}

canvas.addEventListener('mousemove', function(evt) {
	
	var mousePos = getMousePos(canvas, evt);
	
	mouseX = mousePos.x;
	mouseY = mousePos.y;
		
}, false);

canvas.addEventListener('mouseout', this.mouseOut, false);
canvas.addEventListener('mouseover', this.mouseIn, false);
canvas.addEventListener('mousedown', this.mouseClicked, false);
canvas.addEventListener('mouseup', this.mouseReleased, false);

function mouseOut(e) {
	
	isMouseOnCanvas = false;
	
}

function mouseIn(e) {
	
	isMouseOnCanvas = true;
	
}

function mouseClicked(e) {
	
	if (e.button == 0) {
		
		isMouseLeftClicked = true;
		
	} else if (e.button == 2) {
		
		isMouseRightClicked = true;
		
	}
	
}	

function mouseReleased(e) {
	
	isMouseLeftClicked = false;
	isMouseRightClicked = false;

}

function keyPressedEvent(e) {
	
	e.preventDefault();
	
	if (pressedKeys.indexOf(e.keyCode) == -1) {
		
		pressedKeys.push(e.keyCode);
		
	}

}

function keyReleasedEvent(e) {
	
	releasedKeys.push(e.keyCode);
	removeKey(e.keyCode);
	
}

function removeKey(e) {
	
	this.removeKeyIndex = pressedKeys.indexOf(e);
	
	if (this.removeKeyIndex > -1) {
		
		pressedKeys.splice(this.removeKeyIndex, 1);
	
	}
}

function drawHoverText(text) {
	
	
	
}