$(function() {
	var clearBoardButton = $('#refresh');
	var allButtons = $('.btn-md');
	var turnCounter = 0;

	allButtons.on('click', function () {
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
		$(allButtons).text('-');
		$(allButtons).attr('disabled', false);
	});
});