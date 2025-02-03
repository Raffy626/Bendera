$(document).ready(function() {
    const params = new URLSearchParams(window.location.search);
    const countryName = params.get("name"); // Ambil nama negara dari URL
    $.ajax({
        url: `https://restcountries.com/v3.1/name/${countryName}`, // Tambahkan nama negara ke URL
        type: 'GET',
        success: function(response) {
            const data = response[0]; // Ambil data negara pertama
            $('#detail-container').html(`
                <div class="box">
                    <h2>👑${data.name.common}👑</h2>
                    <img src="${data.flags.png}" alt="Flag of ${data.name.common}" />
                    <p><strong>Ibukota:</strong> ${data.capital}</p>
                    <p><strong>Wilayah:</strong> ${data.region}</p>
                    <p><strong>Populasi:</strong> ${data.population}</p>
                    <p><strong>Bahasa:</strong> ${Object.values(data.languages).join(", ")}</p>
                    <p><strong>Mata Uang:</strong> ${Object.values(data.currencies).map(currency => currency.name).join(", ")}</p>
                </div>
            `);
        },
        error: function() {
            $('#detail-container').html('<p>Data tidak ditemukan.</p>');
        }
    });
});
