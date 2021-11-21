const url = 'https://api.coincap.io/v2/assets'
const request = new XMLHttpRequest();
request.open('GET', url);
request.send();
let id ='';
let thename = '';
let rank = '';
let priceUSD = '';
let dailyMove = '';

request.addEventListener('load', function() {
    const data = JSON.parse(this.responseText);
    for(let i=0; i<20; i++)
        toHTML(data.data[i].name, data.data[i].rank, data.data[i].priceUsd, data.data[i].changePercent24Hr);
})

const main = document.querySelector('.main')
const container = document.querySelector('.container')

function toHTML(name, rank, priceUSD, dailyMove) {
    if(dailyMove > 0 ) {
    main.insertAdjacentHTML('beforeend', 
    `<div class="asset">
    <p>${name}</p>
    <p>#${rank}</p>
    <p>$${parseFloat(priceUSD).toFixed(4)}</p>
    <p class="green">${parseFloat(dailyMove).toFixed(2)}%</p>
    </div>`)
    } else {
        main.insertAdjacentHTML('beforeend', 
        `<div class="asset">
        <p>${name}</p>
        <p>#${rank}</p>
        <p>$${parseFloat(priceUSD).toFixed(1)}</p>
        <p class="red">${parseFloat(dailyMove).toFixed(2)}%</p>
        </div>`)
    }
}
