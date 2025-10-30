const toggleBtn = document.getElementById('toggle');
    const speedSlider = document.getElementById('speed');
    const earth = document.querySelector('.earth');
    const moonOrbit = document.querySelector('.moon-orbit');

    let isRunning = true;

    // Pause/Resume Animation
    toggleBtn.addEventListener('click', () => {
      isRunning = !isRunning;
      if (isRunning) {
        earth.style.animationPlayState = 'running';
        moonOrbit.style.animationPlayState = 'running';
        toggleBtn.textContent = '⏸️ Pause';
      } else {
        earth.style.animationPlayState = 'paused';
        moonOrbit.style.animationPlayState = 'paused';
        toggleBtn.textContent = '▶️ Play';
      }
    });

    // Change Speed Dynamically
    speedSlider.addEventListener('input', (e) => {
      const speed = e.target.value;
      earth.style.animationDuration = `${speed}s`;
      moonOrbit.style.animationDuration = `${speed}s`;
    });