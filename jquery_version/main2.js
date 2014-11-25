$(function() {
	var clearBoardButton = $('#refresh');
	var allButtons = $('.btn-md');
	var turnCounter = 0;

	// $(".page-header").on ("click", function() {
	// 	$('.btn-md').fadeIn("slow", function(){
	// 	});
	// //animation complete
	// });

	allButtons.on('click', function () {

		turnCounter++;
		if (turnCounter %2 === 1) {
			$(this).text("X"); 
		}
		else {
			$(this).text("O");
		}
		$(this).attr('disabled', true);
		checkForWinner();
		});

	clearBoardButton.on('click', function() {
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
			return allButtons[winningArray[i][1]].innerText;
		};
	}
}
});