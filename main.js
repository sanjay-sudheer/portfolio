
gsap.registerPlugin(ScrollTrigger);



gsap.from('.projects',{scrollTrigger: {
  trigger: '.projects',
  start:'-30% 60%',
  end: '200px 70%',
  scrub: 1.5,
  toggleActions: "play none none none"
},opacity:0, duration:1, y:200});




if (window.innerWidth > 598 ) {
  gsap.from('.about',{scrollTrigger: {
    trigger: '.about',
    start:'-60% 20%',
    end:'200px 300px',
    scrub: 1.5,
    toggleActions: "play none none none"
  },opacity:0, duration:1});
}

else{
  gsap.from('.about',{scrollTrigger: {
    trigger: '.about',
    start:'-20% 60%',
    end:'600px 500px',
    scrub: 1.5,
    toggleActions: "play none none none"
  },opacity:0, duration:1});
}


var splash = new Splash({background: 'black'}, {
  use: true,
  start: FancyAnimation.moveIn,
  end: FancyAnimation.moveOut
});

splash.fromText("HELLO:)", 4000, {
  color: 'WHITE',
  'font-size':'30px',
  'font-family': 'Bruno Ace SC'
})


const el = document.getElementById('delay');

setTimeout(() => {
  el.style.visibility = 'visible';
}, 500);



