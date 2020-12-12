window.onload = function () {
  getLocalizacao(); 
}



function mapSetup(position){
  var latitude=position.coords.latitude;
  var longitude=position.coords.longitude;
  var map = L.map('map').setView([latitude,longitude], 50);

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
  if(data!== "" && localizacao!== ""){

    try {

      let acoes = await $.ajax({
          url: "/api/acoes",
          method: "get",
          dataType: "json"
      });
      for (let acao of acoes) {
        var local=acao.local;
        var splitLocal=local.split("@");
        var latitude=splitLocal[0];
        var longitude=splitLocal[1];
        if(localizacao.toLowerCase()==getNomeLocalizacao(latitude,longitude)){
          console.log(acao.organizacao_id);
        }
        else{
          console.log(1212);
        }

      }

  } catch(err) {
      console.log(err);
  }
    
  }

}
