window.onload = async function() {
  //ir buscar id do user sessionStorage
  let user_id=2;
  let participadas = await $.ajax({
      url:"/api/utilizador/user_id/participadas",
      method:"get",
      dataType:"json"
  })
  showParticipadas(participadas)
}


function showParticipadas(participadas) {
  let html = "";
  for(let participada of participadas) {
      html += "<section>"+
      "<p>Nome Ação:"+participada.tipoAcao+"</p>"+
      "<p>Nome Organização:"+participada.username+"</p>"
      "<p>Dia ação:"+participada.diaAcaoInicio+"</p>"+
      "<p>Total de pessoas inscritas/Maximo:"+participada.pessoasInscritas+"/"+participada.maximoPessoas+"</p>";

  }
  document.getElementById("").innerHTML = html;
}

