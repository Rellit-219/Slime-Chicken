const currentGameVersion = "2.4.0";
const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

var imagesLoaded = 0;
var imagesNeededToBeLoaded = 0;

class LoadableImage {
	
	constructor(imageSource) {
		
		this.image = new Image();
		this.image.onload = function() {
			
			imagesLoaded++;
			
		}
		
		this.image.src = imageSource;
		
		imagesNeededToBeLoaded++;
		
	}
	
}

//Images

//Text

const titleImage = new LoadableImage("menu/title.png");
const playButtonImage = new LoadableImage("menu/play_button.png");
const difficultyImage = new LoadableImage("menu/difficulty.png");
const tutorialImage = new LoadableImage("menu/tutorial.png");
const easyImage = new LoadableImage("menu/easy.png");
const mediumImage = new LoadableImage("menu/medium.png");
const difficultImage = new LoadableImage("menu/difficult.png");

//Icons

const optionsButtonImage = new LoadableImage("menu/options_button.png");
const optionsButtonHoveredImage = new LoadableImage("menu/options_button_hovered.png");
const optionsButtonActiveImage = new LoadableImage("menu/options_button_active.png");

const backButtonImage = new LoadableImage("menu/back_button.png");

const leftArrowButtonImage = new LoadableImage("menu/left_arrow_button.png");
const rightArrowButtonImage = new LoadableImage("menu/right_arrow_button.png");

const optionUpButtonImage = new LoadableImage("menu/option_up_button.png");
const optionUpButtonHoveredImage = new LoadableImage("menu/option_up_button_hovered.png");

const optionDownButtonImage = new LoadableImage("menu/option_down_button.png");
const optionDownButtonHoveredImage = new LoadableImage("menu/option_down_button_hovered.png");

const configureButtonImage = new LoadableImage("menu/configure_button.png");
const configureButtonHoveredImage = new LoadableImage("menu/configure_button_hovered.png");

const statisticsButtonImage = new LoadableImage("menu/statistics_button.png");
const statisticsButtonHoveredImage = new LoadableImage("menu/statistics_button_hovered.png");

//Background

const hills1Image = new LoadableImage("background/hills_1.png");
const hills2Image = new LoadableImage("background/hills_2.png");
const hills3Image = new LoadableImage("background/hills_3.png");

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
var pressedKeyNames = [];

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
	
	e.preventDefault();
	
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
		pressedKeyNames.push(e.key);
		
	}

}

function keyReleasedEvent(e) {
	
	releasedKeys.push(e.keyCode);
	removeKey(e.keyCode);
	removeKeyName(e.key);
	
}

function removeKey(e) {
	
	this.removeKeyIndex = pressedKeys.indexOf(e);
	
	if (this.removeKeyIndex > -1) {
		
		pressedKeys.splice(this.removeKeyIndex, 1);
		
	}
}

function removeKeyName(e) {
	
	this.removeKeyIndex = pressedKeyNames.indexOf(e);
	
	if (this.removeKeyIndex > -1) {
		
		pressedKeyNames.splice(this.removeKeyIndex, 1);
	
	}
}

function drawHoverText(text) {
	
	context.textAlign = "left";
	context.font = (10 * scaleX) + "px Arial";
	context.fillStyle = "#000000";
	
	if (mouseX + context.measureText(text).width + 10 > canvas.width) {
		
		context.fillText(text, mouseX - context.measureText(text).width - 5, mouseY + 10);
		
	} else {
		
		context.fillText(text, mouseX + 10, mouseY + 10);
		
	}
	
}