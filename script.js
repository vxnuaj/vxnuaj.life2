let intro = document.querySelector('.intro')
let logo = document.querySelector ('.logo-header')
let logoSpan = document.querySelectorAll ('.logo')

//cursor
new kursor ({
    type:2,
    removeDefaultCursor: true,
    color: "#ffffff"
});

//mf splash page

window.addEventListener('DOMContentLoaded', ()=> {
    setTimeout(()=> {

        logoSpan.forEach ((span, idx) => {
            setTimeout(()=>{
                span.classList.add ('active');

            }, (idx+1) *400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{

                setTimeout (()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx +4) * 100)
            })
        }, 3000)
        
        setTimeout(()=>{
            intro.style.top = '-100vh';

        }, 4300)
    })
})


/*/particles

particlesJS("bg", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 315 } },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 1,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 1,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: .3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 1000, duration: .4 },
        push: { particles_nb: 40 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);/*/