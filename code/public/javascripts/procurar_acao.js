var acoesFiltradas=[];//guarda as acoes que o voluntario "selecionou" conforme o dia/local
var map,markers;


window.onload = async function () {
  getLocalizacao(); 
  try {
    let locais = await $.ajax({
        url: "/api/localizacoes",
        method: "get",
        dataType: "json"
    });
    let aux = "";
    for (let local of locais) {
      aux += "<option value='"+ local.localizacao_id +"'>" + local.nome + "</option>";
    }
    document.getElementById("localizacao").innerHTML = aux;
  } catch(err) {
      console.log(err);
  }
}


function mapSetup(position){
  var latitude=position.coords.latitude;
  var longitude=position.coords.longitude;
  map = L.map('map').setView([latitude,longitude], 50);
  markers = new L.LayerGroup().addTo(map);
  L.tileLayer('https://api.mapbox.com/styles/v1/krscripter/ckigd79nk5gtv19qry86qdzsi/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia3JzY3JpcHRlciIsImEiOiJja2lnZDNlbWQwbmJvMnVxazYwcWU5MDRlIn0.jqnlOPKhrK-r7-Il14uaYQ', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  L.marker([latitude,longitude]).addTo(map)
      .bindPopup('A sua localização')
      .openPopup();
}

function getLocalizacao(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(mapSetup);
  }
}

async function procurarAcoes(){
  var data= document.getElementById("date").value;
  var localizacao= document.getElementById("localizacao").value;
  acoesFiltradas=[];
  if(data!== "" && localizacao!== ""){
    try {
      let acoes = await $.ajax({
          url: "/api/acoes",
          method: "get",
          dataType: "json"
      });
      for (let acao of acoes) {
        if(localizacao==acao.localizacao && data==acao.diaAcaoInicio.substring(0,10)){
          acoesFiltradas.push(acao);
        }
      }
      if(acoesFiltradas.length>0){
        markers.clearLayers();
        for(let acao of acoesFiltradas){
          var markerIcon = L.icon({
            iconUrl:'./icons/markerVerde.png',
            iconSize:     [50, 50], // size of the icon
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        var local=acao.local;
        var splitLocal=local.split("@");
        var latitude=splitLocal[0];
        var longitude=splitLocal[1];
        L.marker(new L.LatLng(latitude, longitude), {icon: markerIcon}).addTo(markers);
        }
      }
    } 
    catch(err) {
      console.log(err);
    }
  }
}
