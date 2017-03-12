(function scrollExperiment() {
  'use strict';

  const assignments = document.querySelectorAll('.assignment-js');

  function handleFade(element) {
    if ((window.innerHeight + window.scrollY) > element.offsetTop) {
      return true;
    } return false;
  }

  function handleScroll(animate = true) {
    assignments.forEach(function fadeIn(assignment) {
      if (handleFade(assignment)) {
        const classList = ['fade-in'];

        if (!animate) {
          classList.push('static');
        }

        assignment.classList.add(...classList);
      } else if (handleFade(assignment) === false) {
        assignment.classList.remove('fade-in', 'static');
      }
    });
  }

  handleScroll(false);

  window.addEventListener('scroll', function onScroll() {
    handleScroll();
  }, false);
}());
