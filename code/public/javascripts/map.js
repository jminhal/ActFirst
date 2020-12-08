window.onload = function () {
  mapSetup(); 
}



function mapSetup(){
  var map = L.map('map').setView([38.70719722, -9.15237576], 50);

  L.tileLayer('https://api.mapbox.com/styles/v1/krscripter/ckigd79nk5gtv19qry86qdzsi/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia3JzY3JpcHRlciIsImEiOiJja2lnZDNlbWQwbmJvMnVxazYwcWU5MDRlIn0.jqnlOPKhrK-r7-Il14uaYQ', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([38.70719722, -9.15237576]).addTo(map)
      .bindPopup('A tua localização')
      .openPopup();
}

