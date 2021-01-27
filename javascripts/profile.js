window.onload = async function() {
    let user = sessionStorage.getItem("username");
    if (!username) {
        alert("Your are not logged!");
        window.location = "login.html";        
    }
    let user = await $.ajax({
        url: "/api/utilizadores/username",
        method: "get",
        dataType: "json"
        });
    console.log(username);
    
    document.getElementById("username").innerHTML = "Profile of "+utilizadores.username;
    
}

function logout() {
    sessionStorage.removeItem("username");
    window.location="index.html";
}