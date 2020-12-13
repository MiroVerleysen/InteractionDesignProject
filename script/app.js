const showData = function (jsonObject) {
    //STAP A3 -> er is data (1 object) teruggekomen van de API en je toont het op het HTML document
    jsonObject.records.forEach(parkeergarage => {
        document.querySelector('.js-grid-cards').innerHTML += `<div class="c-parking-card">
                <svg class="top-smaller" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="parking" class="svg-inline--fa fa-parking fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#006DB0" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM240 320h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h96c52.9 0 96 43.1 96 96s-43.1 96-96 96zm0-128h-48v64h48c17.6 0 32-14.4 32-32s-14.4-32-32-32z"></path></svg>
                <p><b>${parkeergarage.fields.name.split(" ").pop()}</b></p>
                <p>Totaal aantal plaatsen: ${parkeergarage.fields.totalcapacity}</p>
                <p>Vrije plaatsen: ${parkeergarage.fields.availablecapacity}</p>
            </div>`;
    });
    //document.querySelector('.js-placeholder-willekeurige-boodschap').innerHTML = `${jsonObject.uitroep} - (${jsonObject.taal}) `;
};

document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        document.querySelector('html').classList.remove('is-night');
        document.getElementById("zon").style.display = "none";
        document.getElementById("maan").style.display = "block";
      } else {
        document.querySelector('html').classList.add('is-night');
        document.getElementById("maan").style.display = "none";
        document.getElementById("zon").style.display = "block";
      }
    });
  });

const callBackBijError = function (data) {
    console.log('Ow... There went something wrong getting the data');
    console.log(data);
};

const getData = function () {
    handleData('https://data.stad.gent/api/records/1.0/search/?dataset=bezetting-parkeergarages-real-time&q=&facet=description', showData, callBackBijError);
};

const init = function () {
    getData();
    document.querySelector('html').classList.add('is-night');
    document.getElementById("maan").style.display = "none";
    document.getElementById("zon").style.display = "block";
};
document.addEventListener('DOMContentLoaded', init);