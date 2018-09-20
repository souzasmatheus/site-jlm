class Website {
	constructor() {

	}

	rotateArrow() {
		$("nav i, nav img").on("click", function() {
			$("nav i").toggleClass("rotation");
			$(".links").toggleClass("do-display");
			$("nav").toggleClass("nav-bottom");
		})
	}


}

new Website().rotateArrow()