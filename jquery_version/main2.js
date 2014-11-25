$(function() {
	var clearBoardButton = $('#refresh');
	var allButtons = $('.btn-md');
	var turnCounter = 0;

	allButtons.on('click', function () {
		$(this)
			.animate({
				width:"110px",
				height:"110px",
				}, 200)
			.animate({
				width:"100px",
				height:"100px",
			}, 200, function(){
			checkForWinner();
			});
		//animation complete
		turnCounter++;
		if (turnCounter %2 === 1) {
		$(this).text("X"); 
		}
		else {
		$(this).text("O");
		}
		$(this).attr('disabled', true);
	});

	clearBoardButton.on('click', function() {
		$(this)
			.animate({
				width:"60px",
				height:"55px",
				}, 200)
			.animate({
				width:"50px",
				height:"45px",
			}, 200)
		$(allButtons).text('-');
		$(allButtons).attr('disabled', false);
	});

	var checkForWinner = function () {

		var winningArray = [[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[6,4,2]];

		for (i = 0; i < winningArray.length; i++) {
			if (allButtons[winningArray[i][0]].innerText !== "-" &&
				allButtons[winningArray[i][1]].innerText === allButtons[winningArray[i][0]].innerText && 
				allButtons[winningArray[i][2]].innerText === allButtons[winningArray[i][0]].innerText) {
				$(allButtons).attr('disabled', true);
			alert(allButtons[winningArray[i][1]].innerText + " has won!");
				$(allButtons)
				.animate({
					width:"115px",
					height:"115px",
					}, 450)
				.animate({
					width:"100px",
					height:"100px",
				}, 450)
			return allButtons[winningArray[i][1]].innerText;
			};
		}
	}
});



