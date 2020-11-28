// Main JS	

(function(){

	const header = document.querySelector('header');

	window.onscroll = function() {
		if (window.pageYOffset > 65) {
			header.classList.add('header-active');
		}
		else {
			header.classList.remove('header-active');
		}
	};

}());

// Burger Button
(function(){
	const burgerBtn = document.querySelector('.header-burger');
	const headerNav = document.querySelector('.header-nav');

	burgerBtn.addEventListener('click', () => {
		headerNav.classList.add('header-nav-active');
	});
}());

// Menu Close Button
(function(){
	const closeBtn = document.querySelector('.header-nav-close');
	const headerNav = document.querySelector('.header-nav');

	closeBtn.addEventListener('click', () => {
		headerNav.classList.remove('header-nav-active');
	});
}());


// Header Link On click
(function(){
	const headerNav = document.querySelector('.header-nav');
	const headerAllLinks = document.querySelectorAll('.header-link');

	headerAllLinks.forEach((link) => {
		link.addEventListener('click', () => {
			headerNav.classList.remove('header-nav-active');
		});
	});

}());

// Smooth Scroll
(function () {
  var smoothScroll = function smoothScroll(targetSelector, duration) {
    var headerHeight = document.querySelector('.header').clientHeight;
    var currentTarget = document.querySelector(targetSelector);
    var targetPosition = currentTarget.getBoundingClientRect().top - headerHeight;
    var startPosition = window.pageYOffset;
    var startTime = null;

    var easeTimeFunction = function easeTimeFunction(t, b, c, d) {
      t /= d / 2;

      if (t < 1) {
        return c / 2 * t * t + b;
      }

      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    var animation = function animation(currentTime) {
      if (startTime === null) {
        startTime = currentTime;
      }

      var timeElapsed = currentTime - startTime;
      var run = easeTimeFunction(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  var scrollTo = function scrollTo() {
    var links = document.querySelectorAll('.js-scroll');
    links.forEach(function (each) {
      each.addEventListener('click', function () {
        var currentTarget = this.getAttribute('href');
        smoothScroll(currentTarget, 1000);
      });
    });
  };

  scrollTo();
})();