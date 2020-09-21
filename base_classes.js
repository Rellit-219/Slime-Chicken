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
	
	constructor(image, x, y, width, height) {
		
		this.image = image
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
	
	setImage(image) {
		
		this.image = image;
		
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
	
	draw() {
		
		context.drawImage(this.image, this.x * scaleX, this.y * scaleY, this.width * scaleX, this.height * scaleY);
		
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
	
	constructor(image, x, y, width, height) {
		
		this.isHoveringOver = false;
		this.hoverOutResult = function(){};
		this.hoverOverResult = function(){};
		this.leftClickResult = function(){};
		
		this.mouseBox = new DynamicMouseBox(x, y, width, height);
		
		this.image = image;
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
	
	setImage(image) {
		
		this.image = image;
		
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
	
	setDimensions(width, height) {
		
		this.mouseBox.setDimensions(width, height);
		
		this.width = width;
		this.height = height;
		
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
			
		} else if (this.isHoveringOver) {
			
			if (!this.mouseBox.isHoveredOver()) {
				
				this.isHoveringOver = false;
				this.hoverOutResult();
				
			}
			
		}
		
		if (this.mouseBox.isLeftClicked()) {
			
			this.leftClickResult();
			
		}
		
	}
	
	draw() {
		
		context.drawImage(this.image, this.x * scaleX, this.y * scaleY, this.width * scaleX, this.height * scaleY);
		
	}
	
}