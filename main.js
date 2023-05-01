let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    start: "top 70%",
    end: "bottom 50%",
    scrub: true,
  },
});
tl.fromTo(
  ".container",
  { opacity: 0, x: 1000 },
  { opacity: 1, x: 0, stagger: 0.23, ease: "power1.inOut" }
);

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "top 70%",
    end: "center 80%",
    scrub: true,
  },
});
tl2.fromTo(".about", { opacity: 0 }, { opacity: 1, ease: "power1.inOut" });
