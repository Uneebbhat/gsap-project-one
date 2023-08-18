window.onload = function () {
  gsap.from(".header", {
    y: -100,
    duration: 1,
    ease: "none",
  });

  gsap.from(".main__first-text", {
    opacity: 0,
    ease: "linear",
    delay: 1.5,
  });

  gsap.from(".main__second-text", {
    opacity: 0,
    ease: "linear",
    delay: 2,
  });
};

gsap.registerPlugin("ScrollTrigger");
gsap.to(".moving__text-first", {
  scrollTrigger: {
    trigger: ".moving__text-first",
    // markers: true,
    start: "top 80%",
    end: "bottom 0%",
    scrub: 2,
  },
  xPercent: -150,
});

gsap.registerPlugin("ScrollTrigger");
gsap.to(".moving__text-second", {
  scrollTrigger: {
    trigger: ".moving__text-second",
    // markers: true,
    start: "top 90%",
    end: "bottom 0%",
    scrub: 2,
  },
  xPercent: 160,
});

gsap.registerPlugin("ScrollTrigger");
gsap.to(".image__section img", {
  scrollTrigger: {
    trigger: ".image__section img",
    // markers: true,
    start: "top 10%",
    // end: "bottom 0%",
    // end: "bottom 0%",
    pin: true,
    scrub: 2,
  },
  scale: 1.7,
});
