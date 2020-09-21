class MainMenuScreen {
	
	constructor() {
		
		//Base dimensions multiplied by 0.8 or by 0.6
		
		this.titleImage = new DynamicImage(titleImage, "center", 20, 310.4, 128);
		
		this.playButton = new DynamicButton(playButtonImage, "center", 180, 132, 43.2);
		this.optionsButton = new DynamicButton(optionsButtonImage, 550, 348, 38.4, 40.8);
		
		//For setting these button result functions, act as if it is in the actual DynamicButton class.
		
		this.playButton.hoverOutResult = function() {
			
			this.setPosition("center", 180);
			this.setDimensions(132, 43.2);
			
		}
		
		this.playButton.hoverOverResult = function() {
			
			this.setPosition("center", 178);
			this.setDimensions(143, 46.8);
			
		}
		
		this.optionsButton.hoverOutResult = function() {
			
			this.setImage(optionsButtonImage);
			
		}
		
		this.optionsButton.hoverOverResult = function() {
			
			this.setImage(optionsButtonHoveredImage);
			
		}
		
		this.optionsButton.leftClickResult = function() {
			
			currentScreen = optionsScreen;
			
		}
		
		this.versionText = new DynamicText("v" + currentGameVersion, "left", 460, 148, 10);
		
	}
	
	generalUpdate() {
		
		this.playButton.update();
		this.optionsButton.update();
		
	}
	
	updatePhysics() {}
	updateCollision() {}
	
	draw() {
		
		this.titleImage.draw();
		this.playButton.draw();
		this.optionsButton.draw();
		this.versionText.draw();
		
	}
	
}
class OptionsScreen {
	
	constructor() {
		
		//Base dimensions multiplied by 0.8 or by 0.6
		
		this.displayOptionsText = new DynamicText("Display Options", "left", 10, 30, 20);
		this.currentDisplayText = new DynamicText("Current Display Configuration : " + displayType, "left", 10, 50, 10);
		this.defaultDisplayText = new DynamicText("(Default Display Configuration : " + displayType + ")", "left", 10, 60, 7);
		
		if (typeof(Storage) !== "undefined") {
			
			this.defaultDisplayText.setText("(Default Display Configuration : " + localStorage.displayConfiguration + ")");
			
		}
		
		this.backButton = new DynamicButton(backButtonImage, 10, 358, 43.2, 33.6);
		
		this.currentDisplayUpButton = new DynamicButton(optionUpButtonImage, 160, 37, 8, 11.2);
		this.currentDisplayDownButton = new DynamicButton(optionDownButtonImage, 160, 52, 8, 11.2);
		
		this.currentDisplayConfigureButton = new DynamicButton(configureButtonImage, 175, 35, 25.6, 27.2);
		
		this.backButton.hoverOutResult = function() {
			
			this.setPosition(10, 358);
			this.setDimensions(43.2, 33.6);
			
		}
		
		//Multiplied by 0.65
		
		this.backButton.hoverOverResult = function() {
			
			this.setPosition(8, 356);
			this.setDimensions(46.8, 36.4);
			
		}
		
		this.backButton.leftClickResult = function() {
			
			currentScreen = mainMenuScreen;
			
		}
		
		this.currentDisplayUpButton.hoverOutResult = function() {
			
			this.setImage(optionUpButtonImage);
			
		}
		
		this.currentDisplayUpButton.hoverOverResult = function() {
			
			this.setImage(optionUpButtonHoveredImage);
			
		}
		
		this.currentDisplayUpButton.leftClickResult = function() {
			
			displayType++;
			
			if (displayType > 2) {
				
				displayType = 0;
				
			}
			
			optionsScreen.currentDisplayText.setText("Current Display Configuration : " + displayType);
			
		}
		
		this.currentDisplayDownButton.hoverOutResult = function() {
			
			this.setImage(optionDownButtonImage);
			
		}
		
		this.currentDisplayDownButton.hoverOverResult = function() {
			
			this.setImage(optionDownButtonHoveredImage);
			
		}
		
		this.currentDisplayDownButton.leftClickResult = function() {
			
			displayType--;
			
			if (displayType < 0) {
				
				displayType = 2;
				
			}
			
			optionsScreen.currentDisplayText.setText("Current Display Configuration : " + displayType);
			
		}
		
		this.currentDisplayConfigureButton.hoverOutResult = function() {
			
			this.setImage(configureButtonImage);
			
		}
		
		this.currentDisplayConfigureButton.hoverOverResult = function() {
			
			this.setImage(configureButtonHoveredImage);
			
		}
		
		this.currentDisplayConfigureButton.leftClickResult = function() {
			
			if (typeof(Storage) !== "undefined") {
				
				localStorage.displayConfiguration = displayType;
				optionsScreen.defaultDisplayText.setText("(Default Display Configuration : " + localStorage.displayConfiguration + ")");
				
			}
			
		}
		
	}
	
	generalUpdate() {
		
		this.backButton.update();
		this.currentDisplayUpButton.update();
		this.currentDisplayDownButton.update();
		this.currentDisplayConfigureButton.update();
		
	}
	
	updatePhysics() {}
	updateCollision() {}
	
	draw() {
		
		this.displayOptionsText.draw();
		this.currentDisplayText.draw();
		this.defaultDisplayText.draw();
		this.backButton.draw();
		this.currentDisplayUpButton.draw();
		this.currentDisplayDownButton.draw();
		this.currentDisplayConfigureButton.draw();
		
		if (this.currentDisplayConfigureButton.isHoveringOver) {
			
			context.textAlign = "left";
			context.font = (10 * scaleX) + "px Arial";
			context.fillStyle = "#000000";
			context.fillText("Set as default display configuration?", mouseX + 10, mouseY + 10);
			
		}
		
	}
	
}
const mainMenuScreen = new MainMenuScreen();
const optionsScreen = new OptionsScreen();