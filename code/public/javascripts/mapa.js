var map,markers;
var utilizadorID=2;


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
// vai buscar a  nossa localizacao
function getLocalizacao(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(mapSetup);
  }
}

async function procurarAcoes(){
  let AP= document.getElementById("AP");
  let APP= document.getElementById("APP");
  let AF= document.getElementById("AF");
  let data= document.getElementById("date").value;
  let localizacao= document.getElementById("localizacao").value;
  let acoes=[];
  if(data!== "" && localizacao!== "" ){
    if(AP.checked){
      //Passado
      try {
        //vai buscar as ações de um certo user (participadas)
        acoes = await $.ajax({
          url: "/api/acoes/participadas?userID="+utilizadorID+"&localizacao="+localizacao+"&data="+data,
          method: "get",
          dataType: "json"
        });
      } 
      catch(err) {
        console.log(err);
      }
      
    }
    //Presente
    if(APP.checked){
      try {
        //vai buscar as ações de um certo user (em participação)
        acoes = await $.ajax({
          url: "/api/acoes/participacoes?userID="+utilizadorID+"&localizacao="+localizacao+"&data="+data,
          method: "get",
          dataType: "json"
        });
      } 
      catch(err) {
        console.log(err);
      }
      
    }
    //Futuro
    if(AF.checked){
      try {
        //vai buscar as ações de um certo user (futuras)
        acoes = await $.ajax({
          url: "/api/acoes/futuras?userID="+utilizadorID+"&localizacao="+localizacao+"&data="+data,
          method: "get",
          dataType: "json"
        });
      } 
      catch(err) {
        console.log(err);
      }
      
    }
    if(acoes){
     markers.clearLayers();
      for(let acao of acoes){
        var markerIcon = L.icon({
          iconUrl:'./icons/markerVerde.png',
          iconSize:     [50, 50], // size of the icon
          popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
       });
        L.marker(new L.LatLng(acao.lat, acao.lng), {icon: markerIcon}).addTo(markers);
      }
    }

  }
}
