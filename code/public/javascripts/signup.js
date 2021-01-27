
async function signUp() {

    let username = document.getElementById("username").value;

    if (username != "") { //Verificar se o input do username não está vazio

        let data = {
            username: username
        }

        try {
            
            let utilizador = await $.ajax({
                url: "/api/utilizadores",
                method: "post",
                data: JSON.stringify(data),
                contentType: "application/json",
                dataType: "json"
            });

            window.location = "login.html";

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