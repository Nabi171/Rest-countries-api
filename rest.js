const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all').then(res => res.json()).then(data => displayCountries(data))
}
const displayCountries = countries => {
    console.log(countries);
    const allCountriesHtml = countries.map(country => getCountryHtml(country));
    // console.log(allCountriesHtml[0]);
    const container = document.getElementById('countries');
    container.innerHTML = allCountriesHtml.join(' ');
}


// // Option 1
// const getCountryHtml = (country) => {
//     const { name, flags } = country;
//     return `
//    <div class="country" >
//       <h2>${country.name.common}</h2>
//       <img src="${country.flags.png}">
//     </div>
//    `
// }

// distructuring
const getCountryHtml = ({ name, flags, area, region }) => {
    // const { name, flags } = country;
    return `
   <div class="country" >
      <h2>${name.common}</h2>
      <p>Area:${area}</p>
      <p>Contienent:${region}</p>
      <img src="${flags.png}">
    </div>
   `
}

// original
// const getCountryHtml = country => {
//     return `
//    <div class="country" >
//       <h2>${country.name.common}</h2>
//       <img src="${country.flags.png}">
//     </div>
//    `
// }
loadCountries();