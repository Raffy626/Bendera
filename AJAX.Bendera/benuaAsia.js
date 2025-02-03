$(document).ready(function() {
    let container = document.getElementById("container")
    $.ajax({
        url: 'https://restcountries.com/v3.1/region/asia', // URL yang benar
        type: 'GET',
        success: function(response) {
            const res = response;
            res.map((data) => {
                container.innerHTML += `
                <div class="box" onclick="window.location='detailNegara.html?name=${data.name.common}'">
                    <img class="img" src="${data.flags.png}" alt="Flag of ${data.name.common}" />
                    <div class="box-content">
                        <h2>${data.name.common}</h2>
                        <p>Wilayah: ${data.region}</p>
                        <p>Populasi: ${data.population}</p>
                        <p>Ibukota: ${data.capital}</p>
                    </div>
                </div>
                `
            })
        }
    })
})
