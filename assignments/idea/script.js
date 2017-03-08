(function idea() {
  'use strict';

  const statContainer = document.querySelector('.statistics-container-js');
  const infoText = document.querySelector('.statistics-js');

  /**
   * [add fake statistics on site for demo purpose]
   */
  function addStatistics() {
    // Get random int for displaying number of letters sent
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    let number = getRandomInt(20000000, 50000000000);

    // Create a paragraph to display number of letters sent
    const statCounter = document.createElement('p');
    const statNumber = document.createTextNode(number);

    statCounter.appendChild(statNumber); // Put number in paragraph
    statCounter.classList.add('statistics-counter'); // Add class for styling
    statContainer.insertBefore(statCounter, infoText); // Insert before infoText

    setInterval(function handleNumber() {
      number = getRandomInt(number, (number + 10));
      statNumber.nodeValue = number;
    }, 1000);
  }
  addStatistics();
}());
