class SavedOptions {
	
	constructor() {
		
		this.displayType = 1;
		this.upKey = {keyCode:38, key:"ArrowUp"};
		
	}
	
}
class SavedStatistics {
	
}
var savedOptions = new SavedOptions();
function saveOptions() {
	
	localStorage.setItem('savedOptions', JSON.stringify(savedOptions));
	
}
function loadOptions() {
	
	savedOptions = JSON.parse(localStorage.getItem('savedOptions'));
	return savedOptions;
	
}
if (typeof(Storage) !== "undefined") {
	
	if (localStorage.savedOptions) {
		
		loadOptions();
	
	} else {
		
		saveOptions();
		
	}
	
}