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
}



async function criarAcao(){
    /*if(){
        VERIFICAR SE ESTA TUDO PREENCHIDO
    }*/
    let data = {
        organizacao_id: 1,
        local: "38.7237927@-9.1421934",
        tipoAcao: 1,
        extraInfo: "Roupa adquada",
        email: "IAde@iade.pt",
        diaAcaoInicio:"2020-12-30",
        diaAcaoFim:"2020-12-30",
        pessoasInscritas:50,
        localizacao:2


    }

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