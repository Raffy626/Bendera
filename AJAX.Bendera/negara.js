$(document).ready(function() {
            let container = document.getElementById("container");
            $.ajax({
                url: 'https://restcountries.com/v3.1/all',
                type: 'GET',
                success: function(response) {
                    response.forEach((data) => {
                        container.innerHTML += `
                            <div class="box" onclick="window.location='detailNegara.html?name=${data.name.common}'">
                                <img class="img" src="${data.flags.png}" alt="Flag of ${data.name.common}" />
                                <div class="box-content">
                                    <h2>Nama negara: ${data.name.common}</h2>
                                    <p>Ibu kota: ${data.capital}</p>
                                    <p>Wilayah: ${data.region}</p>
                                    <p>Populasi: ${data.population}</p>
                                </div>
                            </div>
                        `;
                    });
                }
            });
        });