(function idea() {
  'use strict';

  const statContainer = document.querySelector('.statistics-container-js');
  const infoText = document.querySelector('.statistics-js');
  const city = document.querySelector('.city-js');

  /**
   * Takes two parameters and returns a random integer.
   * @param  {int} min minimum integer to be returned
   * @param  {int} max maximum integer to be returned.
   * @return {int}     random integer between min and max.
   */
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  /**
   * Takes a number and formats it with commas
   * @param  {int}      num    The int that needs to be formatted
   * @return {string}          A comma separated string
   */
  function formatNumber(num) {
    let formattedNumber = '';
    const unformattedNumber = num.toString().split('').reverse();

    for (let i = 0, l = unformattedNumber.length; i < l; i += 1) {
      if (i % 3 === 0 && i !== 0) {
        formattedNumber += ',';
      }
      formattedNumber += unformattedNumber[i];
    }
    return formattedNumber.split('').reverse().join('');
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
    let numCardsSent = getRandomInt(20000000, 50000000000);

    // Create a paragraph to display number of letters sent
    const statCounter = document.createElement('p');
    const statNumber = document.createTextNode(formatNumber(numCardsSent));

    statCounter.appendChild(statNumber); // Put number in paragraph
    statCounter.classList.add('statistics-counter'); // Add class for styling
    statContainer.insertBefore(statCounter, infoText); // Insert before infoText

    setInterval(function handleNumber() {
      numCardsSent = getRandomInt(numCardsSent, (numCardsSent + 10));
      statNumber.nodeValue = formatNumber(numCardsSent);
    }, 1000);
  }
  addStatistics();
}());
