(function scrollExperiment() {
  'use strict';

  const assignments = document.querySelectorAll('.assignment-js');

  function handleFade(element) {
    if ((window.innerHeight + window.scrollY) > element.offsetTop) {
      return true;
    } return false;
  }

  window.addEventListener('scroll', function handleScroll() {
    assignments.forEach(function fadeIn(assignment) {
      if (handleFade(assignment)) {
        assignment.classList.add('fade-in');
      } else if (handleFade(assignment) === false) {
        assignment.classList.remove('fade-in');
      }
    });
  }, false);
}());
