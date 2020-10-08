const simetrizHeader = document.querySelector("header");
const simetrizToggle = document.querySelector(".simetriz-toggle");
const simetrizMenu = document.querySelector(".simetriz-menu");

simetrizToggle.addEventListener("click", function () {
	simetrizMenu.classList.toggle("hidden");
});

$(window).scroll(function () {
	if ($(document).scrollTop() > 100) {
		simetrizHeader.classList.add("md:shadow-lg");
	} else {
		simetrizHeader.classList.remove("md:shadow-lg");
	}
});

particlesJS.load("particles-js", "../../particles.json");

// gsap
const tl = gsap.timeline({ duration: 1, stagger: 0.1 });
const serviceTimeline = gsap.timeline({ duration: 1 });

tl.from(".header-tagline", { x: -50, opacity: 0, ease: "bounce.out" }).from(".header-img", { scale: 0 }, "+=1");
serviceTimeline.from(".services-tagline", {
	scrollTrigger: {
		trigger: ".services-wrapper",
		start: "50px center",
		end: "150px center",
		// markers: true,
		scrub: 1,
	},
	ease: "bounce.out",
	y: -50,
	stagger: 1,
	opacity: 0,
});
