const el1=document.getElementById('intro');
const el2=document.querySelector('body');


setTimeout(()=>{
  el1.remove();
  el2.style.overflow='visible';
},3000);


setTimeout(()=>{
  gsap.registerPlugin(ScrollTrigger);
gsap.from('.landing',{opacity:0, duration:2, x: -50});


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
},3001);

