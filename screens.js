class LoadingScreen {
	
	constructor() {
		
		this.loadingText = new DynamicText("Loading (" + ((imagesLoaded / imagesNeededToBeLoaded) * 100).toFixed(2) + "%)", "center", 300, 200, 20);
		
	}
	
	generalUpdate() {
		
		this.loadingText.setText("Loading (" + ((imagesLoaded / imagesNeededToBeLoaded) * 100).toFixed(2) + "%)");
		
		if (imagesLoaded == imagesNeededToBeLoaded) {
			
			mainMenuScreen = new MainMenuScreen();
			optionsScreen = new OptionsScreen();
			statisticsScreen = new StatisticsScreen();
			gameSelectionScreen = new GameSelectionScreen();
			gameScreen = new GameScreen();
			
			currentScreen = mainMenuScreen;
			
		}
		
	}
	
	updatePhysics() {}
	updateCollision() {}
	
	draw() {
		
		this.loadingText.draw();
		
	}
	
}
class MainMenuScreen {
	
	constructor() {
		
		this.versionText = new DynamicText("v" + currentGameVersion, "left", 460, 148, 10);
		
		this.titleImage = new DynamicImage(titleImage, "center", 20, 0.8);
		
		this.playButton = new DynamicButton(playButtonImage, "center", 180, 0.6);
		this.optionsButton = new DynamicButton(optionsButtonImage, 550, 348, 0.6);
		this.statisticsButton = new DynamicButton(statisticsButtonImage, 554, 297.2, 0.6);
		
		this.playButton.hoverOutResult = function() {
			
			this.setPosition("center", 180);
			this.setScale(0.6);
			
		}
		
		this.playButton.hoverOverResult = function() {
			
			this.setPosition("center", 178);
			this.setScale(0.65);
			
		}
		
		this.playButton.leftClickResult = function() {
			
			gameSelectionScreen.reset();
			currentScreen = gameSelectionScreen;
			
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
		
		this.statisticsButton.hoverOutResult = function() {
			
			this.setImage(statisticsButtonImage);
			
		}
		
		this.statisticsButton.hoverOverResult = function() {
			
			this.setImage(statisticsButtonHoveredImage);
			
		}
		
		this.statisticsButton.leftClickResult = function() {
			
			currentScreen = statisticsScreen;
			
		}
		
	}
	
	generalUpdate() {
		
		this.playButton.update();
		this.optionsButton.update();
		this.statisticsButton.update();
		
	}
	
	updatePhysics() {}
	updateCollision() {}
	
	draw() {
		
		this.versionText.draw();
		this.titleImage.draw();
		this.playButton.draw();
		this.optionsButton.draw();
		this.statisticsButton.draw();
		
		if (this.optionsButton.isHoveringOver) {
			
			drawHoverText("Options");
			
		}
		
		if (this.statisticsButton.isHoveringOver) {
			
			drawHoverText("Statistics");
			
		}
		
	}
	
}
class OptionsScreen {
	
	constructor() {
		
		this.waitingToBindUpKey = false;
		
		this.displayOptionsText = new DynamicText("Display Options", "left", 10, 30, 20);
		this.currentDisplayText = new DynamicText("Current Display Configuration : " + savedOptions.displayType, "left", 10, 50, 10);
		this.defaultDisplayText = new DynamicText("(Default Display Configuration : " + loadOptions().displayType + ")", "left", 10, 60, 7);
		
		this.keybindingOptionsText = new DynamicText("Keybinding Options", "left", 10, 90, 20);
		this.currentUpKeyText = new DynamicText("Current Up Key : " + savedOptions.upKey.key, "left", 10, 110, 10);
		this.defaultUpKeyText = new DynamicText("(Default Up Key : " + loadOptions().upKey.key + ")", "left", 10, 120, 7);
		
		this.backButton = new DynamicButton(backButtonImage, 10, 358, 0.6);
		
		this.currentDisplayUpButton = new DynamicButton(optionUpButtonImage, 160, 37, 0.4);
		this.currentDisplayDownButton = new DynamicButton(optionDownButtonImage, 160, 52, 0.4);
		this.currentDisplayConfigureButton = new DynamicButton(configureButtonImage, 175, 35, 0.4);
		
		this.currentUpKeyConfigureButton = new DynamicButton(configureButtonImage, 175, 95, 0.4);
		this.currentUpKeyButton = new DynamicButton(optionsButtonImage, 145, 95, 0.4);
		
		this.backButton.hoverOutResult = function() {
			
			this.setPosition(10, 358);
			this.setScale(0.6);
			
		}
		
		this.backButton.hoverOverResult = function() {
			
			this.setPosition(8, 356);
			this.setScale(0.65);
			
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
			
			savedOptions.displayType++;
			
			if (savedOptions.displayType > 2) {
				
				savedOptions.displayType = 0;
				
			}
			
			optionsScreen.currentDisplayText.setText("Current Display Configuration : " + savedOptions.displayType);
			
		}
		
		this.currentDisplayDownButton.hoverOutResult = function() {
			
			this.setImage(optionDownButtonImage);
			
		}
		
		this.currentDisplayDownButton.hoverOverResult = function() {
			
			this.setImage(optionDownButtonHoveredImage);
			
		}
		
		this.currentDisplayDownButton.leftClickResult = function() {
			
			savedOptions.displayType--;
			
			if (savedOptions.displayType < 0) {
				
				savedOptions.displayType = 2;
				
			}
			
			optionsScreen.currentDisplayText.setText("Current Display Configuration : " + savedOptions.displayType);
			
		}
		
		this.currentDisplayConfigureButton.hoverOutResult = function() {
			
			this.setImage(configureButtonImage);
			
		}
		
		this.currentDisplayConfigureButton.hoverOverResult = function() {
			
			this.setImage(configureButtonHoveredImage);
			
		}
		
		this.currentDisplayConfigureButton.leftClickResult = function() {
			
			saveOptions();
			optionsScreen.defaultDisplayText.setText("(Default Display Configuration : " + loadOptions().displayType + ")");
			
		}
		
		this.currentUpKeyConfigureButton.hoverOutResult = function() {
			
			this.setImage(configureButtonImage);
			
		}
		
		this.currentUpKeyConfigureButton.hoverOverResult = function() {
			
			this.setImage(configureButtonHoveredImage);
			
		}
		
		this.currentUpKeyConfigureButton.leftClickResult = function() {
			
			saveOptions();
			optionsScreen.defaultUpKeyText.setText("(Default Up Key : " + loadOptions().upKey.key + ")");
			
		}
		
		this.currentUpKeyButton.hoverOutResult = function() {
			
			if (!optionsScreen.waitingToBindUpKey) {
				
				this.setImage(optionsButtonImage);
				
			}
			
		}
		
		this.currentUpKeyButton.hoverOverResult = function() {
			
			if (!optionsScreen.waitingToBindUpKey) {
				
				this.setImage(optionsButtonHoveredImage);
				
			}
			
		}
		
		this.currentUpKeyButton.leftClickResult = function() {
			
			this.setImage(optionsButtonActiveImage);
			optionsScreen.waitingToBindUpKey = true;
			
		}
		
	}
	
	generalUpdate() {
		
		this.backButton.update();
		
		this.currentDisplayUpButton.update();
		this.currentDisplayDownButton.update();
		this.currentDisplayConfigureButton.update();
		
		this.currentUpKeyConfigureButton.update();
		this.currentUpKeyButton.update();
		
		if (this.waitingToBindUpKey) {
			
			if (pressedKeys.length > 0 && pressedKeyNames.length > 0) {
				
				if (pressedKeys[0] == 32) {
					
					savedOptions.upKey = {keyCode:pressedKeys[0], key:"Space"};
					
				} else {
					
					savedOptions.upKey = {keyCode:pressedKeys[0], key:pressedKeyNames[0]};
					
				}
				
				this.currentUpKeyText.setText("Current Up Key : " + savedOptions.upKey.key, "left");
				
				if (this.currentUpKeyButton.isHoveringOver) {
					
					this.currentUpKeyButton.setImage(optionsButtonHoveredImage);
					
				} else {
					
					this.currentUpKeyButton.setImage(optionsButtonImage);
					
				}
				
				this.waitingToBindUpKey = false;
				
			}
			
		}
		
	}
	
	updatePhysics() {}
	updateCollision() {}
	
	draw() {
		
		this.displayOptionsText.draw();
		this.currentDisplayText.draw();
		this.defaultDisplayText.draw();
		
		this.keybindingOptionsText.draw();
		this.currentUpKeyText.draw();
		this.defaultUpKeyText.draw();
		
		this.backButton.draw();
		
		this.currentDisplayUpButton.draw();
		this.currentDisplayDownButton.draw();
		this.currentDisplayConfigureButton.draw();
		
		this.currentUpKeyConfigureButton.draw();
		this.currentUpKeyButton.draw();
		
		if (this.currentDisplayConfigureButton.isHoveringOver) {
			
			drawHoverText("Click to set as default display configuration.");
			
		}
		
		if (this.currentUpKeyConfigureButton.isHoveringOver) {
			
			drawHoverText("Click to set as default up key.");
			
		}
		
		if (this.currentUpKeyButton.isHoveringOver) {
			
			drawHoverText("Click this, then press the key you would like to replace the up key with.");
			
		}
		
	}
	
}
class StatisticsScreen {
	
	constructor() {
		
		this.displayOptionsText = new DynamicText("General Statistics", "center", 300, 30, 20);
		
		this.backButton = new DynamicButton(backButtonImage, 10, 358, 0.6);
		
		this.backButton.hoverOutResult = function() {
			
			this.setPosition(10, 358);
			this.setScale(0.6);
			
		}
		
		this.backButton.hoverOverResult = function() {
			
			this.setPosition(8, 356);
			this.setScale(0.65);
			
		}
		
		this.backButton.leftClickResult = function() {
			
			currentScreen = mainMenuScreen;
			
		}
		
	}
	
	generalUpdate() {
		
		this.backButton.update();
		
	}
	
	updatePhysics() {}
	updateCollision() {}
	
	draw() {
		
		this.displayOptionsText.draw();
		this.backButton.draw();
		
	}
	
}
class GameSelectionScreen {
	
	constructor() {
		
		this.currentDifficulty = 0;
		
		this.difficultyImage = new DynamicImage(difficultyImage, "center", 20, 0.8);
		
		this.currentDifficultyImage = new DynamicImage(easyImage, "center", 100, 0.6);
		
		this.backButton = new DynamicButton(backButtonImage, 10, 358, 0.6);
		
		this.leftDifficultyButton = new DynamicButton(leftArrowButtonImage, 80, 105, 0.6);
		this.rightDifficultyButton = new DynamicButton(rightArrowButtonImage, 496, 105, 0.6);
		
		this.playButton = new DynamicButton(playButtonImage, "center", 340, 0.4);
		
		this.backButton.hoverOutResult = function() {
			
			this.setPosition(10, 358);
			this.setScale(0.6);
			
		}
		
		this.backButton.hoverOverResult = function() {
			
			this.setPosition(8, 356);
			this.setScale(0.65);
			
		}
		
		this.backButton.leftClickResult = function() {
			
			currentScreen = mainMenuScreen;
			
		}
		
		this.leftDifficultyButton.hoverOutResult = function() {
			
			this.setPosition(80, 105);
			this.setScale(0.6);
			
		}
		
		this.leftDifficultyButton.hoverOverResult = function() {
			
			this.setPosition(79, 103);
			this.setScale(0.65);
			
		}
		
		this.leftDifficultyButton.leftClickResult = function() {
			
			gameSelectionScreen.currentDifficulty--;
			if (gameSelectionScreen.currentDifficulty < 0) {
				
				gameSelectionScreen.currentDifficulty = 3;
				
			}
			
			gameSelectionScreen.updateCurrentDifficultyImage();
			
		}
		
		this.rightDifficultyButton.hoverOutResult = function() {
			
			this.setPosition(496, 105);
			this.setScale(0.6);
			
		}
		
		this.rightDifficultyButton.hoverOverResult = function() {
			
			this.setPosition(495, 103);
			this.setScale(0.65);
			
		}
		
		this.rightDifficultyButton.leftClickResult = function() {
			
			gameSelectionScreen.currentDifficulty++;
			if (gameSelectionScreen.currentDifficulty > 3) {
				
				gameSelectionScreen.currentDifficulty = 0;
				
			}
			
			gameSelectionScreen.updateCurrentDifficultyImage();
			
		}
		
		this.playButton.hoverOutResult = function() {
			
			this.setPosition("center", 340);
			this.setScale(0.4);
			
		}
		
		this.playButton.hoverOverResult = function() {
			
			this.setPosition("center", 339);
			this.setScale(0.45);
			
		}
		
		this.playButton.leftClickResult = function() {
			
			gameSelectionScreen.animateOut = true;
			
		}
		
		this.updateCurrentDifficultyImage();
		
	}
	
	generalUpdate() {
		
		if (!this.animateOut) {
			
			this.backButton.update();
			
			this.leftDifficultyButton.update();
			this.rightDifficultyButton.update();
			
			this.playButton.update();
			
		} else {
			
			this.difficultyImage.moveY(-1);
			
			this.currentDifficultyImage.moveY(-1);
			
			this.backButton.moveY(-1);
			
			this.leftDifficultyButton.moveY(-1);
			this.rightDifficultyButton.moveY(-1);
			
			this.playButton.moveY(-1);
			
			if (this.animationOut > 0) {
				
				this.animationOut -= 1;
				
			} else {
				
				console.log(this.animationOut);
				gameScreen.reset(0, 0);
				currentScreen = gameScreen;
				
			}
			
		}
		
	}
	updatePhysics() {}
	updateCollision() {}
	
	draw() {
		
		this.difficultyImage.draw();
		
		this.currentDifficultyImage.draw();
		
		this.backButton.draw();
		
		this.leftDifficultyButton.draw();
		this.rightDifficultyButton.draw();
		
		this.playButton.draw();
		
	}
	
	reset() {
		
		this.animationOut = 500;
		this.animateOut = false;
		
	}
	
	updateCurrentDifficultyImage() {
		
		if (this.currentDifficulty == 0) {
			
			this.currentDifficultyImage.setImage(tutorialImage);
			
		}
		
		if (this.currentDifficulty == 1) {
			
			this.currentDifficultyImage.setImage(easyImage);
			
		}
		
		if (this.currentDifficulty == 2) {
			
			this.currentDifficultyImage.setImage(mediumImage);
			
		}
		
		if (this.currentDifficulty == 3) {
			
			this.currentDifficultyImage.setImage(difficultImage);
			
		}
		
	}
	
}
class GameScreen {
	
	constructor() {
		
		this.background = new BackgroundTerrain();
		
	}
	
	generalUpdate() {
		
		if (this.animateIn) {
			
			this.background.moveY(-0.5);
			
			if (this.animationInOffset > 0) {
				
				this.animationInOffset -= 0.5;
				
			} else {
				
				this.animateIn = false;
				
			}
			
		}
		
	}
	
	updatePhysics() {}
	updateCollision() {}
	
	draw() {
		
		this.background.draw();
		
	}
	
	reset(difficulty, seed) {
		
		this.difficulty = 0;
		this.seed = 0;
		
		this.animationInOffset = 200;
		this.animateIn = true;
		
		this.background.resetPosition();
		
		this.background.moveY(401);
		
	}
	
}
let mainMenuScreen;
let optionsScreen;
let statisticsScreen;
let gameSelectionScreen;
let gameScreen;