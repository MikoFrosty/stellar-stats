import fetch from 'node-fetch';

fetch("https://www.ucsusa.org/resources/satellite-database").then(function(response) {
    return response.text();
    }
).then(function(text) {
    const satellitesString = text.match(/Total number of operating satellites: ([0-9,]{4,7})/)[1];
    const satellitesNumber = Number(satellitesString.replace(/\D/g, ''));
    console.log({satellitesNumber, satellitesString});
});