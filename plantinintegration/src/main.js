import './style.css';

gsap.registerPlugin(ScrollTrigger);



const textScrollAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from([".who", ".is", ".christophe", ".who_is_text", ".who_is_img"], {
    scrollTrigger: {
      trigger: "div",
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: true,
    },
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1,
  });

  gsap.from([".one_night_section h1", ".one_night_section h2", ".one_night_section_text p"], {
    scrollTrigger: {
      trigger: ".one_night_section",
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: true,
    },
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1,
  });

  gsap.from([".new_beggining_section h1", ".new_beggining_section h2", ".new_beggining_section p"], {
    scrollTrigger: {
      trigger: ".new_beggining_section",
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: true,
    },
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1,
  });

  gsap.from([".learn_section h1", ".learn_section h2", ".learn_section p"], {
    scrollTrigger: {
      trigger: ".learn_section",
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: true,
    },
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1,
  });

  gsap.from([".building_section h1", ".building_section h2"], {
    scrollTrigger: {
      trigger: ".building_section",
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: true,
    },
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1,
  });

  gsap.from(".building_section_text", {
    scrollTrigger: {
      trigger: ".building_section",
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: true,
    },
    opacity: 0,
    x: -100,
    duration: 1,
    stagger: 0.3,
  });

  gsap.from(".building_section img", {
    scrollTrigger: {
      trigger: ".building_section",
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: true,
    },
    opacity: 0,
    x: 100,
    duration: 1,
  });

  gsap.from([".guess_section h1", ".guess_section h2", ".guess_section p"], {
    scrollTrigger: {
      trigger: ".guess_section",
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: true,
    },
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1,
  });

  gsap.from(".guess_section .interaction_section", {
    scrollTrigger: {
      trigger: ".guess_section",
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: true,
    },
    opacity: 0,
    y: 100,
    duration: 1,
  });




}

const shakeText = () => {

  gsap.fromTo(
    ".attack_section_text",
    { scale: 0 },
    {
      scale: 7,
      duration: 0.3,
      ease: "power4.out",
      onComplete: () => {

        gsap.fromTo(
          ".attack_section_text",
          { x: -5 },
          {
            x: 5,
            duration: 0.05,
            repeat: 8,
            yoyo: true,
            ease: "linear",
          }
        );
      },
      scrollTrigger: {
        trigger: ".attack_section",
        start: "top 15%",
        end: "top 50%",
        markers: true,
        toggleActions: "play none none reset",
      },
    }
  );

  gsap.from([".visit_section h1", ".visit_section h2", ".visit_section p", ".visit_section button"], {
    scrollTrigger: {
      trigger: ".visit_section",
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: true,
    },
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1,
  });

}

const interactionLanguage = () => {
  const feedback = document.getElementById('feedback');
  const buttons = document.querySelectorAll('.buttons button');


  buttons.forEach(button => {
    button.addEventListener('click', () => {

      buttons.forEach(btn => btn.style.backgroundColor = '');

      if (button.id === 'latin') {
        button.style.backgroundColor = 'green';
        feedback.textContent = "Wow, you're an expert already!";
      } else {
        button.style.backgroundColor = 'red';
        feedback.textContent = "Hmmmm, are you sure?";
      }
    });
  });
}

const stampGame = () => {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 600;

  const stampImage = new Image();
  stampImage.src = 'src/assets/stamp.png';

  let imageLoaded = false;

  stampImage.onload = function () {
    imageLoaded = true;
  };

  const stamps = [];

  function drawStamps() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stamps.forEach(({ x, y, rotation }) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.drawImage(stampImage, -stampImage.width / 2, -stampImage.height / 2);
      ctx.restore();
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.code === "Enter" && imageLoaded) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const rotation = Math.random() * Math.PI * 2;
      stamps.push({ x, y, rotation });
      drawStamps();
    }
  });
  canvas.addEventListener("touchstart", function (event) {
    const touch = event.touches[0];
    const rect = canvas.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    addStamp(x, y);
  });

}

const init = () => {
  textScrollAnimation();
  shakeText();
  interactionLanguage();
  stampGame();
}

init();
