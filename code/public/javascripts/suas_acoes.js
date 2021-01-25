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

  mapSetup();

}


function mapSetup(){

  map = L.map('map').setView([38.718334,-9.150734], 13);
  markers = new L.LayerGroup().addTo(map);
  L.tileLayer('https://api.mapbox.com/styles/v1/krscripter/ckigd79nk5gtv19qry86qdzsi/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia3JzY3JpcHRlciIsImEiOiJja2lnZDNlbWQwbmJvMnVxazYwcWU5MDRlIn0.jqnlOPKhrK-r7-Il14uaYQ', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
}

async function suasAcoesFiltrar(){

  let AP=document.getElementById("AP");
  let APP=document.getElementById("APP");
  let AF=document.getElementById("AF");

  if(AP.checked){
    
    try {
        let acoes = await $.ajax({
          url: "/api/acoes/participadas?userID="+utilizadorID,
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
          alert("Não participou em nenhuma ação!");
        }
      } 
      catch(err) {
        console.log(err);
      }

  }
  if(APP.checked){

    try {
      let acoes = await $.ajax({
        url: "/api/acoes/participacao?userID="+utilizadorID,
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
        alert("Não se encontra a participar em nenhuma ação!");
      }
    } 
    catch(err) {
      console.log(err);
    }

  }
  if(AF.checked){
    try {
      let acoes = await $.ajax({
        url: "/api/acoes/futuras?userID="+utilizadorID,
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
        alert("Não se encontra a participar em nenhuma ação futuramente!");
      }
    } 
    catch(err) {
      console.log(err);
    }

  }
}
