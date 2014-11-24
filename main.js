document.addEventListener('DOMContentLoaded', function(){
	var clearBoardButton = document.getElementById('refresh');
	var allButtons = document.querySelectorAll('.btn-md'); 
	var turnCounter = 0;
	var winningArray = [[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[6,4,2]];

	function checkForWinner() {
		for (i = 0; i < winningArray.length; i++) {
			if (allButtons[winningArray[i][0]].innerText !== "-" &&
				allButtons[winningArray[i][1]].innerText === allButtons[winningArray[i][0]].innerText && 
				allButtons[winningArray[i][2]].innerText === allButtons[winningArray[i][0]].innerText) {
				alert(allButtons[winningArray[i][1]].innerText + " has won!");
				return allButtons[winningArray[i][1]].innerText;
			};
		}
	}

	clearBoardButton.addEventListener('click', function () {
		for (i=0; i <allButtons.length; i++) {
			allButtons[i].innerText = "-";
			allButtons[i].disabled = false;
		}
	});
	
	for (i = 0; i < allButtons.length; i++) {
		allButtons[i].addEventListener('click', function () {
			turnCounter++;
			if (turnCounter %2 === 1) {
				this.innerText = "X"; 
				this.disabled = true;
			}
			else {
				this.innerText = "O";
				this.disabled = true;
			}
			checkForWinner();
		});
	}

});
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




