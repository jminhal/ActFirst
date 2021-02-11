var map,markers;

let user = JSON.parse(sessionStorage.getItem("user"));
var utilizadorID= user.user_id;
var organizacao= user.organizacao;

var latitude;
var longitude;

window.onload = async function () {
  try {
    let user = await $.ajax({
      url: "/api/utilizadores/"+utilizadorID,
      method: "get",
      dataType: "json"
    });
    document.getElementById("userName").innerHTML=user.username;
    if(organizacao==0){
      let userDropBox= "<a href='#' class='selected'>Procurar ações</a>"+
      "<a href='suas_acoes.html' >As suas ações</a>"+
      "<a href='#' onclick='logout()'>Logout</a>";
      document.getElementById("userDropBox").innerHTML = userDropBox;

    }
    if(organizacao==1){
      let userDropBox= "<a href='#' class='selected'>Procurar ações</a>"+
      "<a href='suas_acoes.html' >As suas ações</a>"+
      "<a href='criar_acoes.html'>Criar Acão</a>"+
      "<a href='#' onclick='logout()'>Logout</a>";
      document.getElementById("userDropBox").innerHTML = userDropBox;

    }
  } 
  catch(err) {
    console.log(err);
  }
  
  getLocalizacao(); 

}


function mapSetup(position){
  latitude=position.coords.latitude;
  longitude=position.coords.longitude;
  map = L.map('map').setView([latitude,longitude], 50);
  markers = new L.LayerGroup().addTo(map);//coloca os markers
  L.tileLayer('https://api.mapbox.com/styles/v1/krscripter/ckigd79nk5gtv19qry86qdzsi/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia3JzY3JpcHRlciIsImEiOiJja2lnZDNlbWQwbmJvMnVxazYwcWU5MDRlIn0.jqnlOPKhrK-r7-Il14uaYQ', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  L.marker([latitude,longitude]).addTo(map)
      .bindPopup('A sua localização')
      .openPopup();
}
// vai buscar a  nossa localizacao coordenadas
function getLocalizacao(){
  
  if(navigator.geolocation){  
    navigator.geolocation.getCurrentPosition(mapSetup);
  }
}

async function procurarAcoes(){
  let data= document.getElementById("date").value;
  let localizacao= document.getElementById("localizacao").value;

  let lista = document.getElementById("listaAcoes");

  if(data!== "") {

    try {

      let acoes = await $.ajax({
        url: "/api/acoes?userID="+utilizadorID+"&localizacao="+localizacao+"&data="+data,
        method: "get",
        dataType: "json"
      });

      markers.clearLayers();

      let html = "";
      if (localizacao == "") {

        let count = 0;

        for(let acao of acoes) {

          if (getDistanceFromLatLonInKm(latitude, longitude, acao.lat, acao.lng) <= 5) {
            count++;
            informacaoAcao(acao);

            //Lista com as ações
            html += "<div class='acaoLista' onclick='centerAcaoMap("+acao.lat+","+acao.lng+")'>"+
            "<p>Nome Organização:  "+acao.NomeOrganizacao+"</p>"+
            "<p>Tipo da ação:  "+acao.nome+"</p>" + "</div><hr>";
          }

        }

        if (count == 0) {
          alert("Não exitem ações perto de si!");
          lista.style.display = "none";
        }
        else { //Se tiver acoes perto de si, vai fazer aparecer a lista de acoes
          lista.style.display = "block";
          lista.innerHTML = html;
        }
        return;

      }
      else {

        for(let acao of acoes) {

          informacaoAcao(acao);

          //Lista com as ações
          html += "<div class='acaoLista' onclick='centerAcaoMap("+acao.lat+","+acao.lng+")'>"+
          "<p>Nome Organização:  "+acao.NomeOrganizacao+"</p>"+
          "<p>Tipo da ação:  "+acao.nome+"</p>" + "</div><hr>";

        }

      }

      if (acoes.length == 0) {
        alert("Não exitem ações nesta data!");
        lista.style.display = "none";
      }
      else { //Se tiver acoes nessa data, vai fazer aparecer a lista de acoes
        lista.style.display = "block";
        lista.innerHTML = html;
      }

    } 
    catch(err) {
      console.log(err);
    }
  }
}




function maisInfoAcao(acao_id) {
  sessionStorage.setItem("acao_id", acao_id);
  sessionStorage.setItem("pagina", "procurar_acoes.html");
  window.location = "mais_info.html";

}

function logout(){
  sessionStorage.clear();
  window.location = "login.html";
}
async function participar(id) {

  let data = {
    acao_id: id,
    user_id: utilizadorID
  }

try {

    let result = await $.ajax({
        url: "/api/acoes/addacao",
        method: "post",
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "json"
    });

    alert("Nova ação adicionada, com sucesso!");
    window.location = "procurar_acoes.html";

} catch(err) {
    console.log(err);
}

}

function centerAcaoMap(lat, lng) {
  map.panTo(new L.LatLng(lat, lng));
}



function getDistanceFromLatLonInKm(latUtilizador, lngUtilizador, latAcao, lngAcao) {

  var R = 6371; // Radius of the earth in km
  var distanciaLat = deg2rad(latAcao-latUtilizador);  // deg2rad below
  var distanciaLng = deg2rad(lngAcao-lngUtilizador); 
  var a = 
    Math.sin(distanciaLat/2) * Math.sin(distanciaLat/2) +
    Math.cos(deg2rad(latUtilizador)) * Math.cos(deg2rad(latAcao)) * 
    Math.sin(distanciaLng/2) * Math.sin(distanciaLng/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

function informacaoAcao(acao) {

    let marker=new L.marker(new L.LatLng(acao.lat, acao.lng)).addTo(markers);

    if (organizacao==1 && acao.organizacao_id != utilizadorID) {
      marker.bindPopup("<section>"+
      "<p>Nome Organização:  "+acao.NomeOrganizacao+"</p>"+
      "<p>Tipo da ação:  "+acao.nome+"</p>"+
      "<p>Dia ação:  "+acao.diaAcaoInicio+ " às " + acao.horaAcaoInicio +"</p>"+
      "<p>Total de pessoas inscritas/Maximo:  "+acao.numeroInscritos+"  /  "+acao.maximoPessoas+"</p></section>"+
      "<button id='btnMaisInfo' onclick='maisInfoAcao("+acao.acao_id+")'>Mais informações</button>");
    }
    else {
      marker.bindPopup("<section>"+
      "<p>Nome Organização:  "+acao.NomeOrganizacao+"</p>"+
      "<p>Tipo da ação:  "+acao.nome+"</p>"+
      "<p>Dia ação:  "+acao.diaAcaoInicio+ " às " + acao.horaAcaoInicio +"</p>"+
      "<p>Total de pessoas inscritas/Maximo:  "+acao.numeroInscritos+"  /  "+acao.maximoPessoas+"</p></section>"+
      "<button id='btnParticipar' onclick='participar("+acao.acao_id+")'>Participar</button>  <button id='btnMaisInfo' onclick='maisInfoAcao("+acao.acao_id+")'>Mais informações</button>");
    }
}