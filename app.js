'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

function Store(city, minCust, maxCust, avgCookie) {
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.hourlyCust = [];
  this.totalSales = 0;

  this.custPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
      let number = this.generateNumberBetween(this.minCust, this.maxCust);
      console.log(number);
      this.hourlyCust.push(number);
    }

    return this.hourlyCust;
  };

  this.cookiesPerHour = function (hourlyCust) {
    let total = [];
    let sum = 0;

    for (let i = 0; i < hourlyCust.length; i++) {
      let hourlySales = Math.round(hourlyCust[i] * this.avgCookie);
      sum = sum + hourlySales;
      this.result.push(hourlySales);
    }

    this.totalSales = sum;
    return total;
  };
}

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

function render(store) {
  let tableEl = document.getElementById('salmon-cookies');
  let tableRowEl = document.createElement('tr');
  let cityEl = document.createElement('td');
  let totalEl = document.createElement('td');

  tableEl.appendChild(tableRowEl);
  tableRowEl.appendChild(cityEl);
  tableRowEl.appendChild(totalEl);

  cityEl.textContent = store.city;
  totalEl.textContent = store.totalSales;
}

render(seattle);
render(tokyo);
render(dubai);
render(paris);
render(lima);

// seattle.custPerHour();
// let seattleCookiesPerHour = seattle.cookiesPerHour(seattle.hourlyCust);
// console.log(seattle);
// console.log(seattleCookiesPerHour);

// function salesList(sales) {
//   let seattleResults = document.getElementById('seattle-results');

//   let listElement = document.createElement('ul');
//   seattleResults.appendChild(listElement);

//   for (let i = 0; i < sales.length; i++) {
//     let listItemElement = document.createElement('li');
//     listItemElement.textContent = hours[i] + ': ' + sales[i] + ' cookies';
//     listElement.appendChild(listItemElement);
//   }

//   let totalElement = document.createElement('li');
//   totalElement.textContent = 'Total: ' + seattle.totalSales + ' cookies';
//   listElement.appendChild(totalElement);
// }

// salesList(seattleCookiesPerHour);