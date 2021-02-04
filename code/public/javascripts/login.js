async function login() {

    let email = document.getElementById("email").value;

    if (email != "") { //Verificar se o input do email não está vazio

        try {
            
            let utilizador = await $.ajax({
                url: "/api/utilizadores?email="+email,
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
        alert("Please enter your email!");
    }
}