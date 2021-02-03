let user = JSON.parse(sessionStorage.getItem("user"));

var utilizadorID= user.user_id;
var organizacao= user.organizacao;
var acao;
var map;


window.onload = async function () {
  try {
    let user = await $.ajax({
      url: "/api/utilizadores/"+utilizadorID,
      method: "get",
      dataType: "json"
    });
    document.getElementById("userName").innerHTML=user.username;
    if(organizacao==0){
      document.getElementById("btn").innerHTML=`<button class='btnAbandonar' onclick='abandonar("+acao.acao_id+")'>Abandonar</button>`;
      let userDropBox= "<a href='procurar_acoes.html' class='selected'>Procurar ações</a>"+
      "<a href='suas_acoes.html' >As suas ações</a>"+
      "<a href='#' onclick='logout()'>Logout</a>";
      document.getElementById("userDropBox").innerHTML = userDropBox;
    }
    if(organizacao==1){
      document.getElementById("btn").innerHTML= `<button class='btnApagarAcao' onclick='apagarAcao("+acao.acao_id+")'>Apagar Ação</button>`;
      let userDropBox= "<a href='procurar_acoes.html' class='selected'>Procurar ações</a>"+
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

  //Vai buscar a acao que guardou no sessionStorage
  let acao_id = sessionStorage.getItem("acao_id");

  acao = await $.ajax({
    url: "/api/acoes/"+acao_id,
    method: "get",
    dataType: "json"
  });
  document.getElementById("dataInicio").innerHTML= acao.diaAcaoInicio+" às "+acao.horaAcaoInicio;
  document.getElementById("dataFim").innerHTML= acao.diaAcaoFim+" às "+acao.horaAcaoFim;
  document.getElementById("localizacao").innerHTML= acao.localizacao;
  document.getElementById("maxPessoas").innerHTML= acao.numeroInscritos+"/"+acao.maximoPessoas;
  document.getElementById("maisInfo").innerHTML= acao.extraInfo;
  document.getElementById("email").innerHTML= acao.email;
  document.getElementById("orgNome").innerHTML= acao.username;
  document.getElementById("acaoTipo").innerHTML= acao.nome;
}

function mapSetup(position) {

  let latitude=position.coords.latitude;
  let longitude=position.coords.longitude;

  //faz aparecer o mapa 
  map = L.map('map').setView([latitude,longitude], 8);

  L.tileLayer('https://api.mapbox.com/styles/v1/krscripter/ckigd79nk5gtv19qry86qdzsi/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia3JzY3JpcHRlciIsImEiOiJja2lnZDNlbWQwbmJvMnVxazYwcWU5MDRlIn0.jqnlOPKhrK-r7-Il14uaYQ', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  //Vai adicionar o marker do utilizador
  L.marker([latitude,longitude]).addTo(map);

  
  //Vai adicionar o marker do acao
  L.marker(new L.LatLng(acao.lat, acao.lng)).addTo(map);

  getRoute(latitude, longitude, acao.lat, acao.lng);
  
}
// vai buscar a  nossa localizacao
function getLocalizacao() {
  
  if(navigator.geolocation){  
    navigator.geolocation.getCurrentPosition(mapSetup);
  }
}

function logout(){
  sessionStorage.clear();
  window.location = "login.html";
}

function getRoute(lat, lng, acao_lat, acao_lng) {

  route = L.Routing.control({
      waypoints: [
        L.latLng(lat, lng),
        L.latLng(acao_lat, acao_lng)
      ],
      waypointMode: 'snap',
      createMarker: function() {} //Faz remover os markers criados pelo Routing
  }).addTo(map);


    //document.getElementsByClassName("leaflet-control-container")[1].style.display = "None";
}