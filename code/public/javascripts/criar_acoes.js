let user = JSON.parse(sessionStorage.getItem("user"));

//Verificar se é organizacao
if (!user.organizacao) {
    alert("Não tem premissões para aceder a esta pagina!"); 
    window.location = "procurar_acoes.html";
}
// buscar à variavel criada do user (está guardada no pesquisar_acao)
var utilizadorID= user.user_id;
var organizacao= user.organizacao;

window.onload = async function () {
    //escreve o nome do utilizador junto ao logo e na pagina (para criar a ação)
    document.getElementById("userName").innerHTML = user.username;
    document.getElementById("orgNome").innerHTML = user.username;
    document.getElementById("email").innerHTML = user.email;

    //Carregar tipo de açoes
    try {
        let tipoAcoes = await $.ajax({
          url: "/api/acoes/tipoacoes",
          method: "get",
          dataType: "json"
        });
        let html = "";
        for (let tipo of tipoAcoes) {
            html += "<option value='"+tipo.tipoAcao_id+"'>"+tipo.nome+"</option>";
        }

        document.getElementById("acaoTipo").innerHTML = html;

      } 
      catch(err) {
        console.log(err);
      }

}

// funcação criar ação é executada quando a organização carrega no botão
async function criarAcao(){
    let dataInicio = document.getElementById("dataInicio").value;
    let horaInicio = document.getElementById("horaInicio").value;
    let localizacao = document.getElementById("localizacao").value;
    let maxPessoas = document.getElementById("maxPessoas").value;
    let acaoTipo = document.getElementById("acaoTipo").value;
    let dataFim = document.getElementById("dataFim").value;
    let horaFim = document.getElementById("horaFim").value;
    let maisInfo = document.getElementById("maisInfo").value;
    if(dataInicio != "" && horaInicio != "" && localizacao != "" && maxPessoas != "" && acaoTipo != "" && dataFim != "" && horaFim != ""){

        try {
            //Usa a API do heroapi para saber a latitude, longitude e cidade de uma determinada rua
            await $.ajax({
                url: 'https://geocode.search.hereapi.com/v1/geocode?q='+localizacao+'&apiKey=DOCDuZ1HR5WGPWZcSqcVS5YftYu2UVsQ1ILVd-uchJA',
            }).done(function(info) {//quando vai buscar as coisas ao URL
                //verificar se o array da localização está vazio
                if (info.items.length > 0) {

                    let infoLocalizacao = info.items[0];
                    let data = {
                        organizacao_id: utilizadorID,
                        latitude: infoLocalizacao.position.lat,
                        longitude: infoLocalizacao.position.lng,
                        localizacao: infoLocalizacao.address.city,
                        tipoAcao: acaoTipo,
                        extraInfo: maisInfo,
                        diaAcaoInicio: dataInicio + " " + horaInicio,
                        diaAcaoFim: dataFim + " " + horaFim,
                        maximoPessoas: maxPessoas,
                    }

                    let result = $.ajax({
                        url: "/api/acoes",
                        method: "post",
                        data: JSON.stringify(data),
                        contentType: "application/json",
                        dataType: "json"
                    });
        
                    alert("Ação criada com sucesso!");

                }
                else {
                    alert("Localização inválida!")
                }

            });

          } 
          catch(err) {
            console.log(err);
          }   
    }
    else {
        alert("Preencha os campos!");
    }
}

