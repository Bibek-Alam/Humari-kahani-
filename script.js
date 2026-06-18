function checkPassword(){

    const password =
        document.getElementById("password").value;

    if(password === "2007"){

        document.getElementById(
            "password-screen"
        ).style.display = "none";

        document.getElementById(
            "website-content"
        ).style.display = "block";

    }else{

        document.getElementById(
            "error"
        ).innerText =
        "Wrong Password 🌹";
    }
}

const firefly =
document.getElementById("firefly-btn");

firefly.addEventListener("click",()=>{

    const secret =
    document.getElementById(
        "secret-message"
    );

    if(secret.style.display==="block"){
        secret.style.display="none";
    }else{
        secret.style.display="block";
    }

});
