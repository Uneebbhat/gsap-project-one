window.addEventListener("load", function () {
  gsap.from(".header", {
    y: -100,
    duration: 1,
    ease: "none",
  });

  // Check screen width
  const screenWidth = window.innerWidth || document.documentElement.clientWidth;

  // Define xPercent based on screen width
  let xPercentValueOne = -300;
  if (screenWidth < 560) {
    xPercentValueOne = -250; // Change the value for smaller screens
  }

  let xPercentValueTwo = 240;
  if (screenWidth < 560) {
    xPercentValueTwo = 250; // Change the value for smaller screens
  }

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".moving__text-first", {
    scrollTrigger: {
      trigger: ".moving__text-first",
      start: "top 80%",
      end: "bottom 0%",
      scrub: 2,
    },
    xPercent: xPercentValueOne,
  });

  gsap.to(".moving__text-second", {
    scrollTrigger: {
      trigger: ".moving__text-second",
      start: "top 90%",
      end: "bottom 0%",
      scrub: 2,
    },
    xPercent: xPercentValueTwo,
  });

  gsap.to(".image__section img", {
    scrollTrigger: {
      trigger: ".image__section img",
      start: "top 10%",
      pin: true,
      end: "top 70%",
      scrub: 2,
    },
    scale: 1.5,
    ease: "none",
  });

  gsap.to(".image__section", {
    scrollTrigger: {
      trigger: ".image__section",
      start: "top 20%",
      end: "bottom 100%",
      markers: true,
      scrub: 2,
    },
    // scale: 1.7,
    width: "100%",
  });
});

const firstText = new SplitType(".main__first-text");
const secondText = new SplitType(".main__second-text");

gsap.to(".char", {
  y: 0,
  stagger: 0.05,
  delay: 1,
});

const cursor = document.querySelector(".circle");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});
