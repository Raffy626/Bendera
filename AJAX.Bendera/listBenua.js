$(document).ready(function(){
    let container = document.getElementById("container");
    $.ajax({
        url: 'https://restcountries.com/v3.1/region/asia',
        type: 'GET',
        success: function(response){ // Perbaikan typo
            console.log(response);
            const res = response.slice(0, 1); // Use 'response' instead of 'res'
            res.forEach((data) => {
                container.innerHTML += `
                
                <div class="card">
                    <p><a href="asia.html"><b>Region: ${data.region}</b></a></p>
                </div>
                `
            });
        },
    });
    let wadah = document.getElementById("container");
    $.ajax({
        url: 'https://restcountries.com/v3.1/region/europe',
        type: 'GET',
        success: function(response){ // Perbaikan typo
            console.log(response);
            const res = response.slice(0, 1); // Use 'response' instead of 'res'
            res.forEach((data) => {
                wadah.innerHTML += `
                <div class="card">
                    <p><a href="europe.html"><b>Region: ${data.region}</b></a></p>
                </div>
                `
            });
        },
    });
    let wadah2 = document.getElementById("container");
    $.ajax({
        url: 'https://restcountries.com/v3.1/region/africa',
        type: 'GET',
        success: function(response){ // Perbaikan typo
            console.log(response);
            const res = response.slice(0, 1); // Use 'response' instead of 'res'
            res.forEach((data) => {
                wadah2.innerHTML += `
                <div class="card">
                    <p><a href="africa.html"><b>Region: ${data.region}</b></a></p>
                </div>
                `
            });
        },
    });
    let wadah3 = document.getElementById("container");
    $.ajax({
        url: 'https://restcountries.com/v3.1/region/oceania',
        type: 'GET',
        success: function(response){ // Perbaikan typo
            console.log(response);
            const res = response.slice(0, 1); // Use 'response' instead of 'res'
            res.forEach((data) => {
                wadah3.innerHTML += `
                <div class="card">
                    <p><a href="oceania.html"><b>Region: ${data.region}</b></a></p>
                </div>
                `
            });
        },
    });
    let wadah4 = document.getElementById("container");
    $.ajax({
        url: 'https://restcountries.com/v3.1/region/americas',
        type: 'GET',
        success: function(response){ // Perbaikan typo
            console.log(response);
            const res = response.slice(0, 1); // Use 'response' instead of 'res'
            res.forEach((data) => {
                wadah4.innerHTML += `
                <div class="card">
                    <p><a href="america.html"><b>Region: ${data.region}</b></a></p>
                </div>
                `
            });
        },
    });
});
