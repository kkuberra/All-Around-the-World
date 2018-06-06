const baseUrl = 'https://restcountries.eu/rest/v2/all'
let baseUrl2 = 'https://restcountries.eu/rest/v2/name'
const dropDown = document.querySelector('#dropDown')
var selector = document.querySelector("select");
selector.addEventListener("change", getValues);

(function getCountries() {
    fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
            fillDropDown(data)
        })
}())

function getValues() {
    const country = dropDown.options[dropDown.selectedIndex].value
    const url = baseUrl2 + `/${country}`

    fetch(url)
        .then(response => response.json())
        .then(renderInfo)
        .then(selector)

}

function selector() {
    selector.addEventListener("change", getValues);
    
}

function fillDropDown(countries) {
    const listElements = countries.map(country => {
        let countryName = document.createElement('option')
        countryName.setAttribute('value', country.name)
        countryName.textContent = country.name
        dropDown.appendChild(countryName)
        return countryName
    })
}

function renderInfo(country) {
    const countryInfo = document.querySelector('.country-info')
    const imgTag = document.createElement('img')
    const div = document.createElement('div')
    countryInfo.innerHTML = ''
    imgTag.src = country[0].flag
    countryInfo.appendChild(imgTag)
    countryInfo.appendChild(div)
    addName(country, div)
    addPopulation(country, div)
    addCapital(country, div)
    addRegion(country, div)
}

function addPopulation(country, div) {
    // const countryInfo = document.querySelector('.country-info')
    const population = document.createElement('h3')
    population.innerHTML = `Population- ${country[0].population}`
    div.appendChild(population)
}

function addName(country, div) {
    // const countryInfo = document.querySelector('.country-info')
    const name = document.createElement('h2')
    name.innerHTML = `${country[0].name}`
    div.appendChild(name)
}

function addCapital(country, div) {
    // const div = document.querySelector('.country-info')
    const capital = document.createElement('h3')
    capital.innerHTML = `Capital- ${country[0].capital}`
    div.appendChild(capital)
}

function addRegion(country, div) {
    // const div = document.querySelector('.country-info')
    const region = document.createElement('h3')
    region.innerHTML = `Region- ${country[0].region}`
    div.appendChild(region)
}

