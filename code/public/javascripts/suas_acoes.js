var map,markers;

let user = JSON.parse(sessionStorage.getItem("user"));

var utilizadorID= user.user_id;
var organizacao= user.organizacao;


window.onload = async function () {
  try {
    let user = await $.ajax({
      url: "/api/utilizadores/"+utilizadorID,
      method: "get",
      dataType: "json"
    });
    document.getElementById("userName").innerHTML=user.username;
    if(organizacao==0){
      let userDropBox= "<a href='procurar_acoes.html'>Procurar ações</a>"+
      "<a href='#' class='selected'>As suas ações</a>"+
      "<a href='#' onclick='logout()'>Logout</a>";
      document.getElementById("userDropBox").innerHTML = userDropBox;

    }
    if(organizacao==1){
      let userDropBox= "<a href='procurar_acoes.html'>Procurar ações</a>"+
      "<a href='#' class='selected'>As suas ações</a>"+
      "<a href='criar_acoes.html'>Criar Acão</a>"+
      "<a href='#' onclick='logout()'>Logout</a>";
      document.getElementById("userDropBox").innerHTML = userDropBox;

    }


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
        loadListaAcoes(acoes);
        for(let acao of acoes){

        let marker=new L.marker(new L.LatLng(acao.lat, acao.lng)).addTo(markers);
          marker.bindPopup("<section>"+
          "<p>Nome Organização:  "+acao.NomeOrganizacao+"</p>"+
          "<p>Tipo da ação:  "+acao.nome+"</p>"+
          "<p>Dia ação:  "+acao.diaAcaoInicio+ " às " + acao.horaAcaoInicio +"</p>"+
          "<p>Total de pessoas inscritas/Maximo:  "+acao.numeroInscritos+"/"+acao.maximoPessoas+"</p></section>"+
          "<button class='btnMaisInfo' onclick='maisInfoAcao("+acao.acao_id+")'>Mais informações</button>");
        
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
      loadListaAcoes(acoes);
      for(let acao of acoes){
        
        let marker=new L.marker(new L.LatLng(acao.lat, acao.lng)).addTo(markers);

        //Caso seja uma organização
        if(organizacao==1){
          marker.bindPopup("<section>"+
          "<p>Nome Organização:  "+acao.NomeOrganizacao+"</p>"+
          "<p>Tipo da ação:  "+acao.nome+"</p>"+
          "<p>Dia ação:  "+acao.diaAcaoInicio+ " às " + acao.horaAcaoInicio +"</p>"+
          "<p>Total de pessoas inscritas/Maximo:  "+acao.numeroInscritos+"/"+acao.maximoPessoas+"</p></section>"+
          "<button class='btnApagarAcao' onclick='apagarAcao("+acao.acao_id+")'>Apagar Ação</button>  <button class='btnMaisInfo' onclick='maisInfoAcao("+acao.acao_id+")'>Mais informações</button>");  
        }
        else{
          marker.bindPopup("<section>"+
          "<p>Nome Organização:  "+acao.NomeOrganizacao+"</p>"+
          "<p>Tipo da ação:  "+acao.nome+"</p>"+
          "<p>Dia ação:  "+acao.diaAcaoInicio+ " às " + acao.horaAcaoInicio +"</p>"+
          "<p>Total de pessoas inscritas/Maximo:  "+acao.numeroInscritos+"/"+acao.maximoPessoas+"</p></section>"+
          "<button class='btnAbandonar' onclick='abandonar("+acao.acao_id+")'>Abandonar</button>  <button class='btnMaisInfo' onclick='maisInfoAcao("+acao.acao_id+")'>Mais informações</button>");
        }
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
      loadListaAcoes(acoes);
      for(let acao of acoes){
       
        let marker=new L.marker(new L.LatLng(acao.lat, acao.lng)).addTo(markers);

       //Caso seja uma organização
        if(organizacao==1){
          marker.bindPopup("<section>"+
          "<p>Nome Organização:  "+acao.NomeOrganizacao+"</p>"+
          "<p>Tipo da ação:  "+acao.nome+"</p>"+
          "<p>Dia ação:  "+acao.diaAcaoInicio+ " às " + acao.horaAcaoInicio +"</p>"+
          "<p>Total de pessoas inscritas/Maximo:  "+acao.numeroInscritos+"/"+acao.maximoPessoas+"</p></section>"+
          "<button class='btnApagarAcao' onclick='apagarAcao("+acao.acao_id+")'>Apagar Ação</button>  <button class='btnMaisInfo' onclick='maisInfoAcao("+acao.acao_id+")'>Mais informações</button>");  
        }
        else{
          marker.bindPopup("<section>"+
          "<p>Nome Organização:  "+acao.NomeOrganizacao+"</p>"+
          "<p>Tipo da ação:  "+acao.nome+"</p>"+
          "<p>Dia ação:  "+acao.diaAcaoInicio+ " às " + acao.horaAcaoInicio +"</p>"+
          "<p>Total de pessoas inscritas/Maximo:  "+acao.numeroInscritos+"/"+acao.maximoPessoas+"</p></section>"+
          "<button class='btnAbandonar' onclick='abandonar("+acao.acao_id+")'>Abandonar</button>  <button class='btnMaisInfo' onclick='maisInfoAcao("+acao.acao_id+")'>Mais informações</button>");
        }
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

async function abandonar(acao_id) {

  try {
    let acao = await $.ajax({
        url: "/api/utilizadores?acao_id="+acao_id+"&user_id="+utilizadorID,
        method: "delete",
        dataType: "json"
    });

    alert("Ação abandonada com sucesso!");
    window.location = "suas_acoes.html";
  
  } catch(err) {
      console.log(err);
  }

}

async function apagarAcao(acao_id) {

  try {
    let acao = await $.ajax({
        url: "/api/acoes?acao_id="+acao_id+"&organizacao_id="+utilizadorID,
        method: "delete",
        dataType: "json"
    });

    alert("Ação apagada com sucesso!");
    window.location = "suas_acoes.html";
  
  } catch(err) {
      console.log(err);
  }

}
function logout(){
  sessionStorage.clear();
  window.location = "login.html";
}

function maisInfoAcao(acao_id) {
  sessionStorage.setItem("pagina", "suas_acoes.html");
  sessionStorage.setItem("acao_id", acao_id);
  window.location = "mais_info.html";

}

function centerAcaoMap(lat, lng) {
  map.panTo(new L.LatLng(lat, lng));
}

function loadListaAcoes(acoes) {

  let lista = document.getElementById("listaAcoes");

  let html = "";
  for (let acao of acoes) {
    html += "<div class='acaoLista' onclick='centerAcaoMap("+acao.lat+","+acao.lng+")'>"+
        "<p>Nome Organização:  "+acao.NomeOrganizacao+"</p>"+
        "<p>Tipo da ação:  "+acao.nome+"</p>" + "</div><hr>";
  }

  if (acoes.length > 0) {
    lista.style.display = "block";
    lista.innerHTML = html;
  }
  else {
    lista.style.display = "none";
  }

}