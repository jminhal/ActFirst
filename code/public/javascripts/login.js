async function login() {
    try {
        let login = {
            username: document.getElementById("username").value,
        }
        
        let utilizadores = await $.ajax({
            url: "/api/utilizadores/login",
            method: "post",
            data: JSON.stringify(login),
            dataType: "json",
            contentType: "application/json"
        });
        sessionStorage.setItem("username",utilizadores.username);
        alert(JSON.stringify(utilizadores))
        window.location = "profile.html";
    } catch (err) {
        console.log(err);
    }
}