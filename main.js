
gsap.registerPlugin(ScrollTrigger);
gsap.from('.landing',{opacity:0, duration:2, x: -50});
gsap.from('.about',{scrollTrigger: {
  trigger: '.about',
  start:'-60% top',
  markers: true,
  scrub: 1.5,
  end: '100px',
  toggleActions: "play restart none none"
},opacity:0, duration:1});

