class Website {
	constructor() {

	}

	rotateArrow() {
		$("#arrowDown, nav img").on("click", function() {
			$("#arrowDown").toggleClass("rotation")
		})
	}
}

new Website().rotateArrow()