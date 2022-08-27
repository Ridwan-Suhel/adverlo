// gsap animation
gsap.registerPlugin(ScrollTrigger);

gsap.from(".why-adv-content-area .content-wrapper", {
  duration: 0.6,
  opacity: 0,
  y: 180,

  scrollTrigger: {
    trigger: ".why-adv-content-area .content-wrapper",
    toggleActions: "restart none none pause",
    start: "20% bottom",
  },
});
gsap.from(".why-adv-content-area .btn-wrapper", {
  duration: 0.6,
  opacity: 0,
  y: 180,
  delay: 1,

  scrollTrigger: {
    trigger: ".why-adv-content-area .btn-wrapper",
    toggleActions: "restart none none reverse",
    delay: 1,
    // start: "20% bottom",
  },
});

// gsap.from(".adsFor-busines-section .section-title", {
//   duration: 0.6,
//   opacity: 0,
//   y: 180,

//   scrollTrigger: {
//     trigger: ".adsFor-busines-section .section-title",
//     toggleActions: "restart none none pause",
//     // start: "20% bottom",
//   },
// });

gsap.from(".adsFor-busines-section .section-title1", {
  duration: 0.6,
  opacity: 0,
  y: 120,

  scrollTrigger: {
    trigger: ".adsFor-busines-section .section-title1",
    toggleActions: "restart none none reverse",
    // start: "20% bottom",
  },
});

gsap.from(".single-boxanim1", {
  duration: 0.6,
  opacity: 0,
  y: 100,
  stagger: 0.2,
  delay: 1,

  scrollTrigger: {
    trigger: ".singlebox-raw-wrapper",
    toggleActions: "restart none none pause",
    // start: "20% bottom",
  },
});

gsap.from(".section-title2", {
  duration: 0.6,
  opacity: 0,
  y: 180,

  scrollTrigger: {
    trigger: ".section-title2",
    toggleActions: "restart none none reverse",
    // start: "20% bottom",
  },
});
gsap.from(".adv-img-svg1", {
  duration: 0.9,
  opacity: 0,
  y: 50,
  scale: 0,

  scrollTrigger: {
    trigger: ".adv-img-svg1",
    toggleActions: "restart none none reverse",
    // start: "20% bottom",
  },
});
gsap.from(".adv-img-svg2", {
  duration: 0.6,
  opacity: 0,
  y: 180,
  delay: 0.5,

  scrollTrigger: {
    trigger: ".adv-img-svg2",
    toggleActions: "restart none none reverse",
    // start: "20% bottom",
  },
});

gsap.from(".animT", {
  duration: 0.6,
  opacity: 0,
  y: 100,
  stagger: 0.2,
  delay: 1,

  scrollTrigger: {
    trigger: ".other-serv-offer-content-wrapper",
    toggleActions: "restart none none pause",
    // start: "20% bottom",
  },
});
gsap.from(".animT2", {
  duration: 0.6,
  opacity: 0,
  y: 100,
  stagger: 0.2,
  delay: 1,

  scrollTrigger: {
    trigger: ".meetAteam-section-contnt-wrapper",
    toggleActions: "restart none none pause",
    // start: "20% bottom",
  },
});
gsap.from(".single-boxanim2", {
  duration: 0.6,
  opacity: 0,
  y: 100,
  stagger: 0.2,
  delay: 1,

  scrollTrigger: {
    trigger: ".team-member-wrapper",
    toggleActions: "restart none none pause",
    // start: "20% bottom",
  },
});
gsap.from(".anim3", {
  duration: 0.6,
  opacity: 0,
  y: 100,
  stagger: 0.2,
  delay: 1,

  scrollTrigger: {
    trigger: ".meeting-box-area",
    toggleActions: "restart none none pause",
    // start: "20% bottom",
  },
});
gsap.from(".anim4", {
  duration: 0.6,
  opacity: 0,
  y: 100,
  stagger: 0.2,
  delay: 1,

  scrollTrigger: {
    trigger: ".have-q-section",
    toggleActions: "restart none none pause",
    // start: "20% bottom",
  },
});
gsap.from(".textAnim1", {
  duration: 0.6,
  opacity: 0,
  y: 100,
  stagger: 0.2,
  delay: 1,

  scrollTrigger: {
    trigger: ".hero-content-area",
    toggleActions: "play none none none",
    // start: "20% bottom",
  },
});
gsap.from(".svgfalgWave", {
  scrollTrigger: {
    trigger: ".sale-busines-section",
    // toggleActions: "restart none none pause",
    start: "top top",
    end: "+=1600",
    pin: ".sale-busines-section",
    scrub: 1,
    // start: "20% bottom",
  },
  opacity: 0,
  y: 50,
});
