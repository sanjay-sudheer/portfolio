
gsap.registerPlugin(ScrollTrigger);
gsap.from('.landing',{opacity:0, duration:2, x: -50});
gsap.from('.about',{scrollTrigger: {
  trigger: '.about',
  start:'-60% 20%',
  end:'200px 300px',
  scrub: 1.5,
  toggleActions: "play none none none"
},opacity:0, duration:1});


gsap.from('.projects',{scrollTrigger: {
  trigger: '.projects',
  start:'-30% 60%',
  end: '200px 70%',
  markers: true,
  scrub: 1.5,
  toggleActions: "play none none none"
},opacity:0, duration:1, y:200});

