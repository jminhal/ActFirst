var map,markers;
var utilizadorID=2;


window.onload = async function () {
  try {
    let user = await $.ajax({
      url: "/api/utilizadores/"+utilizadorID,
      method: "get",
      dataType: "json"
    });
    document.getElementById("userName").innerHTML=user.username;
  } 
  catch(err) {
    console.log(err);
  }
  
  getLocalizacao(); 

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
// vai buscar a  nossa localizacao
function getLocalizacao(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(mapSetup);
  }
}

async function procurarAcoes(){
  let data= document.getElementById("date").value;
  let localizacao= document.getElementById("localizacao").value;

  if(data!== "" && localizacao!== "" ) {

    try {
      let acoes = await $.ajax({
        url: "/api/acoes?userID="+utilizadorID+"&localizacao="+localizacao+"&data="+data,
        method: "get",
        dataType: "json"
      });

      markers.clearLayers();
      for(let acao of acoes){
        var markerIcon = L.icon({
          iconUrl:'./icons/markerVerde.png',
          iconSize:     [50, 50], // size of the icon
          popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
       });
        L.marker(new L.LatLng(acao.lat, acao.lng), {icon: markerIcon}).addTo(markers);
      }

      if (acoes.length == 0) {
        alert("Não exitem ações nesta data!");
      }
    } 
    catch(err) {
      console.log(err);
    }
  }
}
