(function idea() {
  'use strict';

  // TODO: Replace int with comma separated string.

  const statContainer = document.querySelector('.statistics-container-js');
  const infoText = document.querySelector('.statistics-js');
  const city = document.querySelector('.city-js');

  // TODO: Prevent the form from posting

  /**
   * Takes two parameters and returns a random integer.
   * @param  {int} min minimum integer to be returned
   * @param  {int} max maximum integer to be returned.
   * @return {int}     random integer between min and max.
   */
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function handleCity() {
    const cities = ['Pune', 'Baghdad', 'Kolkata', 'Cape Town', 'Santiago', 'New York', 'Moscow', 'Madrid', 'Busan', 'Boston'];

    setInterval(function randomCity() {
      const randomIndex = getRandomInt(0, (cities.length - 1));
      city.innerText = cities[randomIndex];
    }, getRandomInt(1000, 10000));
  }
  handleCity();

  /**
   * Add fake statistics on site for demo purpose
   */
  function addStatistics() {
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
