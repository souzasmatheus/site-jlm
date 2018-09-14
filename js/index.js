class Website {
	constructor() {

	}

	rotateArrow() {
		$("#arrowDown, nav img").on("click", function() {
			$("#arrowDown").toggleClass("rotation");
			$(".my-dropdown").toggleClass("do-display")
		})
	}


}

new Website().rotateArrow()