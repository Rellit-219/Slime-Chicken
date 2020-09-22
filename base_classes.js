class DynamicMouseBox {
	
	constructor(x, y, width, height) {
		
		this.width = width;
		this.height = height;
		
		if (!"center".localeCompare(x)) {
			
			this.x = 300 - (this.width / 2);
			this.xIsCentered = true;
			
		} else {
			
			this.x = x;
			this.xIsCentered = false;
			
		}
		
		if (!"center".localeCompare(y)) {
			
			this.y = 200 - (this.height / 2);
			this.yIsCentered = true;
			
		} else {
			
			this.y = y;
			this.yIsCentered = false;
			
		}
		
	}
	
	setPosition(x, y) {
		
		if (!"center".localeCompare(x)) {
			
			this.x = 300 - (this.width / 2);
			this.xIsCentered = true;
			
		} else {
			
			this.x = x;
			this.xIsCentered = false;
			
		}
		
		if (!"center".localeCompare(y)) {
			
			this.y = 200 - (this.height / 2);
			this.yIsCentered = true;
			
		} else {
			
			this.y = y;
			this.yIsCentered = false;
			
		}
		
	}
	
	setDimensions(width, height) {
		
		this.width = width;
		this.height = height;
		
		if (this.xIsCentered) {
			
			this.x = 300 - (this.width / 2);
			
		}
		
		if (this.yIsCentered) {
			
			this.y = 200 - (this.height / 2);
			
		}
	}
	
	isHoveredOver() {
		
		if (mouseX >= this.x * scaleX && mouseX <= (this.x * scaleX) + (this.width * scaleX)) {
			
			if (mouseY >= this.y * scaleY && mouseY <= (this.y * scaleY) + (this.height * scaleY)) {
				
				return true;
				
			}
			
		}
		
		return false;
		
	}
	
	isLeftClicked() {
		
		return this.isHoveredOver() && isMouseLeftClicked;
		
	}
	
	isRightClicked() {
		
		return this.isHoveredOver() && isMouseRightClicked;
		
	}
	
}
class DynamicImage {
	
	constructor(image, x, y, scale) {
		
		this.image = image;
		
		this.scale = scale;
		
		this.width = this.image.image.naturalWidth * scale;
		this.height = this.image.image.naturalHeight * scale;
		
		if (!"center".localeCompare(x)) {
			
			this.x = 300 - (this.width / 2);
			this.xIsCentered = true;
			
		} else {
			
			this.x = x;
			this.xIsCentered = false;
			
		}
		
		if (!"center".localeCompare(y)) {
			
			this.y = 200 - (this.height / 2);
			this.yIsCentered = true;
			
		} else {
			
			this.y = y;
			this.yIsCentered = false;
			
		}
		
	}
	
	setImage(image) {
		
		this.image = image;
		this.width = this.image.image.naturalWidth * this.scale;
		this.height = this.image.image.naturalHeight * this.scale;
		
		if (this.xIsCentered) {
			
			this.x = 300 - (this.width / 2);
			
		}
		
		if (this.yIsCentered) {
			
			this.y = 200 - (this.height / 2);
			
		}
		
	}
	
	setPosition(x, y) {
		
		if (!"center".localeCompare(x)) {
			
			this.x = 300 - (this.width / 2);
			this.xIsCentered = true;
			
		} else {
			
			this.x = x;
			this.xIsCentered = false;
			
		}
		
		if (!"center".localeCompare(y)) {
			
			this.y = 200 - (this.height / 2);
			this.yIsCentered = true;
			
		} else {
			
			this.y = y;
			this.yIsCentered = false;
			
		}
		
	}
	
	moveY(yOffset) {
		
		this.y += yOffset;
		
	}
	
	moveX(xOffset) {
		
		this.x += xOffset;
		
	}
	
	setScale(scale) {
		
		this.width = this.image.image.naturalWidth * scale;
		this.height = this.image.image.naturalHeight * scale;
		
		if (this.xIsCentered) {
			
			this.x = 300 - (this.width / 2);
			
		}
		
		if (this.yIsCentered) {
			
			this.y = 200 - (this.height / 2);
			
		}
		
	}
	
	draw() {
		
		context.drawImage(this.image.image, this.x * scaleX, this.y * scaleY, this.width * scaleX, this.height * scaleY);
		
	}
	
}
class DynamicText {
	
	constructor(text, originPoint, x, y, size) {
		
		this.text = text;
		this.size = size;
		this.originPoint = originPoint;
		this.x = x;
		this.y = y;
		
	}
	
	setText(text) {
		
		this.text = text;
		
	}
	
	setPosition(x, y) {
		
		this.x = x;
		this.y = y;
		
	}
	
	moveY(yOffset) {
		
		this.y += yOffset;
		
	}
	
	moveX(xOffset) {
		
		this.x += xOffset;
		
	}
	
	setDimensions(width, height) {
		
		this.width = width;
		this.height = height;
		
	}
	
	draw() {
		
		context.textAlign = this.originPoint;
		context.font = (this.size * scaleX) + "px Arial";
		context.fillStyle = "#000000";
		context.fillText(this.text, this.x * scaleX, this.y * scaleY);
		
	}
	
}
class DynamicButton {
	
	constructor(image, x, y, scale) {
		
		this.isHoveringOver = false;
		this.isLeftClickedOver = false;
		this.hoverOutResult = function(){};
		this.hoverOverResult = function(){};
		this.leftClickResult = function(){};
		
		this.image = image;
		
		this.scale = scale;
		
		this.width = this.image.image.naturalWidth * scale;
		this.height = this.image.image.naturalHeight * scale;
		
		this.mouseBox = new DynamicMouseBox(x, y, this.width, this.height);
		
		if (!"center".localeCompare(x)) {
			
			this.x = 300 - (this.width / 2);
			this.xIsCentered = true;
			
		} else {
			
			this.x = x;
			this.xIsCentered = false;
			
		}
		
		if (!"center".localeCompare(y)) {
			
			this.y = 200 - (this.height / 2);
			this.yIsCentered = true;
			
		} else {
			
			this.y = y;
			this.yIsCentered = false;
			
		}
		
	}
	
	setImage(image) {
		
		this.image = image;
		
		this.width = this.image.image.naturalWidth * this.scale;
		this.height = this.image.image.naturalHeight * this.scale;
		
		this.mouseBox.setDimensions(this.width, this.height);
		
		if (this.xIsCentered) {
			
			this.x = 300 - (this.width / 2);
			
		}
		
		if (this.yIsCentered) {
			
			this.y = 200 - (this.height / 2);
			
		}
		
	}
	
	setPosition(x, y) {
		
		this.mouseBox.setPosition(x, y);
		
		if (!"center".localeCompare(x)) {
			
			this.x = 300 - (this.width / 2);
			this.xIsCentered = true;
			
		} else {
			
			this.x = x;
			this.xIsCentered = false;
			
		}
		
		if (!"center".localeCompare(y)) {
			
			this.y = 200 - (this.height / 2);
			this.yIsCentered = true;
			
		} else {
			
			this.y = y;
			this.yIsCentered = false;
			
		}
		
	}
	
	moveY(yOffset) {
		
		this.y += yOffset;
		
	}
	
	moveX(xOffset) {
		
		this.x += xOffset;
		
	}
	
	setScale(scale) {
		
		this.width = this.image.image.naturalWidth * scale;
		this.height = this.image.image.naturalHeight * scale;
		
		this.mouseBox.setDimensions(this.width, this.height);
		
		if (this.xIsCentered) {
			
			this.x = 300 - (this.width / 2);
			
		}
		
		if (this.yIsCentered) {
			
			this.y = 200 - (this.height / 2);
			
		}
		
	}
	
	update() {
		
		if (this.mouseBox.isHoveredOver() && !this.isHoveringOver) {
			
			this.isHoveringOver = true;
			this.hoverOverResult();
			
		} else if (this.isHoveringOver && !this.mouseBox.isHoveredOver()) {
			
			this.isHoveringOver = false;
			this.hoverOutResult();
			
		}
		
		if (this.mouseBox.isLeftClicked() && !this.isLeftClicked) {
			
			this.isLeftClicked = true;
			this.leftClickResult();
			
		} else if (this.isLeftClicked && !this.mouseBox.isLeftClicked()) {
			
			this.isLeftClicked = false;
			
		}
		
	}
	
	draw() {
		
		context.drawImage(this.image.image, this.x * scaleX, this.y * scaleY, this.width * scaleX, this.height * scaleY);
		
	}
	
}
class BackgroundTerrain {
	
	constructor() {
		
		this.hills1Image = new DynamicImage(hills1Image, 0, 0, 1);
		this.hills2Image = new DynamicImage(hills2Image, 0, 60, 1);
		this.hills3Image = new DynamicImage(hills3Image, 0, 120, 1);
		
	}
	
	moveY(offsetY) {
		
		this.hills1Image.moveY(offsetY);
		this.hills2Image.moveY(offsetY);
		this.hills3Image.moveY(offsetY);
		
	}
	
	draw() {
		
		this.hills1Image.draw();
		this.hills2Image.draw();
		this.hills3Image.draw();
		
	}
	
	resetPosition() {
		
		this.hills1Image.setPosition(0, 0);
		this.hills2Image.setPosition(0, 60);
		this.hills3Image.setPosition(0, 120);
		
	}
	
}
class ChickenLauncher {
	
	constructor() {
		
		this.hills1Image = new DynamicImage(hills1Image, 0, 0, 1);
		this.hills2Image = new DynamicImage(hills2Image, 0, 60, 1);
		this.hills3Image = new DynamicImage(hills3Image, 0, 120, 1);
		
	}
	
	update() {
		
	
	}
	
	draw() {
		
		this.hills1Image.draw();
		this.hills2Image.draw();
		this.hills3Image.draw();
		
	}
	
	launch() {
		
	}
	
	resetLauncher(difficulty) {
		
		
		
	}
	
}