
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
      
    } 
    catch(err) {
        console.log(err);
    }
}


async function criarAcao(){
    /*
    let orgNome = document.getElementById("orgNome");
    let dataInicio = document.getElementById("dataInicio");
    let horaInicio = document.getElementById("horaInicio");
    let email = document.getElementById("email");
    let localizacao = document.getElementById("localizacao");
    let maxPessoas = document.getElementById("maxPessoas");
    let acaoTipo = document.getElementById("acaoTipo");
    let dataFim = document.getElementById("dataFim");
    let horaFim = document.getElementById("horaFim");
    let maisInfo = document.getElementById("maisInfo");
    if(organizacao_id!= "" && lat!= "" && lng!= "" && localizacao!= "" && tipoAcao!= "" && extraInfo!= "" && email!= "" && diaAcaoInicio!= "" && diaAcaFim!= "" && maximoPessoas!= ""){
        let data = {
            organizacao_id: orgNome,
            lat: 0,
            lng: 0,
            localizacao: localizacao,
            tipoAcao: acaoTipo,
            extraInfo: maisInfo,
            email: email,
            diaAcaoInicio: dataInicio+ horaInicio,
            diaAcaoFim: dataFim+horaFim,
            maximoPessoas: maxPessoas,
        }
        
    }*/


    try {

        let result = await $.ajax({
            url: "/api/acoes",
            method: "post",
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json"
        });

    } catch(err) {
        console.log(err);
    }
}