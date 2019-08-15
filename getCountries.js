
function getCountries(callback) {
    $.ajax({
        url: "https://restcountries.eu/rest/v2/all",
        method: "GET",
        success: function (result, status, response) {
            console.log(status, response)
            // callback(result)
        },
        error: function (err) {
            $("#countries").html("<h1>No Data!</h1>")
        }
    })
}

function getCountriesByName(name, callback) {
    $.ajax({
        url: `https://restcountries.eu/rest/v2/name/${name}`,
        method: "GET",
        success: function (result, status, response) {
            console.log(status, response)
            callback(result)
        },
        error: function (err) {
            $("#countries").html("<h1>No Data!</h1>")
        }
    })
}
$(function () {

    $("#search").on("click", function () {
        const cName = $("#country").val()
        getCountriesByName(cName, (result) => {
            $("#countries").html(getCountriesNames(result))
        })
    })

})

function getCountriesNames(countries) {
    return countries.map(c => `<h1>${c.name}</h1>`)
}
getCountries((countries) => {
    $("#countries").html(getCountriesNames(countries))
});

