document.addEventListener('DOMContentLoaded', function(){
	var clearBoardButton = document.querySelector('#refresh');
	var allButtons = document.querySelectorAll('.btn-md'); 
	var turnCounter = 0;
	
	for (i = 0; i < allButtons.length; i++) {
		allButtons[i].addEventListener('click', function () {
			turnCounter++;
			if (turnCounter %2 === 1) {
				this.innerText = "X";
			}
			else {
				this.innerText = "O";
			}
		});
	}

	// allButtons[0].addEventListener('click', function() {
	// 	turnCounter++;
	// 	if (turnCounter%2 === 1) {	
	// 		this.innerText = "X";
	// 	}
	// 	else {
	// 		this.innerText = "O";
	// 	}
	// });
	// allButtons[1].addEventListener('click', function() {
	// 	turnCounter++;
	// 	if (turnCounter%2 === 1) {	
	// 		this.innerText = "X";
	// 	}
	// 	else {
	// 		this.innerText = "O";
	// 	}
	// });
	// allButtons[2].addEventListener('click', function() {
	// 	turnCounter++;
	// 	if (turnCounter%2 === 1) {	
	// 		this.innerText = "X";
	// 	}
	// 	else {
	// 		this.innerText = "O";
	// 	}
	// });
	// allButtons[3].addEventListener('click', function() {
	// 	turnCounter++;
	// 	if (turnCounter%2 === 1) {	
	// 		this.innerText = "X";
	// 	}
	// 	else {
	// 		this.innerText = "O";
	// 	}
	// });
	// allButtons[4].addEventListener('click', function() {
	// 	turnCounter++;
	// 	if (turnCounter%2 === 1) {	
	// 		this.innerText = "X";
	// 	}
	// 	else {
	// 		this.innerText = "O";
	// 	}
	// });
	// allButtons[5].addEventListener('click', function() {
	// 	turnCounter++;
	// 	if (turnCounter%2 === 1) {	
	// 		this.innerText = "X";
	// 	}
	// 	else {
	// 		this.innerText = "O";
	// 	}
	// });
	// allButtons[6].addEventListener('click', function() {
	// 	turnCounter++;
	// 	if (turnCounter%2 === 1) {	
	// 		this.innerText = "X";
	// 	}
	// 	else {
	// 		this.innerText = "O";
	// 	}
	// });
	// allButtons[7].addEventListener('click', function() {
	// 	turnCounter++;
	// 	if (turnCounter%2 === 1) {	
	// 		this.innerText = "X";
	// 	}
	// 	else {
	// 		this.innerText = "O";
	// 	}
	// });
	// allButtons[8].addEventListener('click', function() {
	// 	turnCounter++;
	// 	if (turnCounter%2 === 1) {	
	// 		this.innerText = "X";
	// 	}
	// 	else {
	// 		this.innerText = "O";
	// 	}
	// });


});

