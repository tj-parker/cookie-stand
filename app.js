'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

const seattle = {
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  hourlyCust: [],
  totalSales: 0,
  custPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let number = generateNumberBetween(this.minCust, this.maxCust);
      console.log(number);
      this.hourlyCust.push(number);
    }

    return this.hourlyCust;
  },

  cookiesPerHour: function (hourlyCust) {
    let total = [];
    let sum = 0;

    for (let i = 0; i < hourlyCust.length; i++) {
      let hourlySales = Math.round(hourlyCust[i] * this.avgCookie);
      sum = sum + hourlySales;
      result.push(hourlySales);
    }

    this.totalSales = sum;
    return total;
  }
};

seattle.custPerHour();
let seattleCookiesPerHour = seattle.cookiesPerHour(seattle.hourlyCust);
console.log(seattle);
console.log(seattleCookiesPerHour);

function salesList(sales) {
  let seattleResults = document.getElementById('seattle-results');

  let listElement = document.createElement('ul');
  seattleResults.appendChild(listElement);

  for (let i = 0; i < sales.length; i++) {
    let listItemElement = document.createElement('li');
    listItemElement.textContent = hours[i] + ': ' + sales[i] + ' cookies';
    listElement.appendChild(listItemElement);
  }

  let totalElement = document.createElement('li');
  totalElement.textContent = 'Total: ' + seattle.totalSales + ' cookies';
  listElement.appendChild(totalElement);
}

salesList(seattleCookiesPerHour);

const tokyo = {
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  custPerHour: function () { }  
};

const dubai = {
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  custPerHour: function () { } 
};

const paris = {
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  custPerHour: function () { } 
};

const lima = {
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  custPerHour: function () { } 
};
