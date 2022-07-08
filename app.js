'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let storeFormEl = document.getElementById('store-form');

storeFormEl.addEventListener('submit', function(event) {
  event.preventDefault();
  let city = event.target.location.value;
  let minCust = parseInt(event.target.min.value);
  let maxCust = parseInt(event.target.max.value);
  let avgCookiesPerCust = parseInt(event.target.avgCookies.value);

  let store = new Store(city, minCust, maxCust, avgCookiesPerCust);
  store.generateCookiesPerHour();
  store.renderData();
});
function generateNumberBetween(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

function Store(city, minCust, maxCust, avgCookiePerCust) {
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.hourlySales = [];
  this.totalSales = 0;
  this.avgCookiePerCust = avgCookiePerCust;
}

Store.prototype.generateCookiesPerHour = function() {

  for (let i = 0; i < hours.length; i++) {
    let custAtHour = generateNumberBetween(this.minCust, this.maxCust);
    let salesAtHour = Math.round(custAtHour * this.avgCookiePerCust);
    this.hourlySales.push(salesAtHour);
    this.totalSales += salesAtHour;
  }
};
let tableEl = document.getElementById('sales-data');
let headerRowEl = document.createElement('tr');
let headerBlankEl = document.createElement('td');
let headerTotalEl = document.createElement('td');

headerBlankEl.textContent = '';
tableEl.appendChild(headerRowEl);

headerTotalEl.textContent = 'Total';

headerRowEl.appendChild(headerBlankEl);

for (let i = 0; i < hours.length; i++) {
  let hoursEl = document.createElement('td');
  let eachHour = hours[i].toString();
  hoursEl.textContent = eachHour;
  headerRowEl.appendChild(hoursEl);
}

Store.prototype.renderData = function() {

  let rowEl = document.createElement('tr');

  let cityCell = document.createElement('td');
  cityCell.textContent = this.city;

  let totalCell = document.createElement('td');
  totalCell.textContent = this.totalSales;

  rowEl.appendChild(cityCell);

  for (let i = 0; i < this.hourlySales.length; i++) {
    let hourlyEl = document.createElement('td');
    hourlyEl.textContent = this.hourlySales[i].toString();
    rowEl.appendChild(hourlyEl);
  }

  headerRowEl.appendChild(headerTotalEl);
  rowEl.appendChild(totalCell);

  tableEl.appendChild(rowEl);
};

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

seattle.generateCookiesPerHour();
tokyo.generateCookiesPerHour();
dubai.generateCookiesPerHour();
paris.generateCookiesPerHour();
lima.generateCookiesPerHour();

seattle.renderData();
tokyo.renderData();
dubai.renderData();
paris.renderData();
lima.renderData();
