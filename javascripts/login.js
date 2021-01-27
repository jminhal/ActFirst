async function login() {

    let username = document.getElementById("username").value;

    if (username != "") { //Verificar se o input do username não está vazio

        try {
            
            let utilizador = await $.ajax({
                url: "/api/utilizadores?username="+username,
                method: "get",
                dataType: "json"
            });


            sessionStorage.setItem("user", JSON.stringify(utilizador));
            window.location = "procurar_acoes.html";

        } catch (err) {
            console.log(err);
            if (err.status == 404) {
                alert(err.responseJSON.msg);
            }
        }

    }
    else {
        alert("Please enter your username!");
    }
}