
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        new Typed('.typing', {
          strings: ['Software Engineer', 'Full Stack Developer', 'Software Engineer','Full Stack Developer'],
          typeSpeed: 50,
          backSpeed: 30,
          backDelay: 1500,
          loop: true,
          showCursor: true
        });
        observer.disconnect(); // run once when it appears
      }
    });
  }, { threshold: 0.5 });

  observer.observe(document.querySelector('.typing'));

