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

	deleteMobile() {
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		 	$(".remove-md").append('<img src="./img/ipad.jpg" alt="">>')
		}
	}
}

var jlm = new Website();
jlm.rotateArrow();