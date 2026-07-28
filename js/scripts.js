function login()
{
    let email =  document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");

    //simple condition
    if(email==="shitalgurale@gmail.com" && password ==="1234")
    {

        //save login state in localstorage
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user",email);

        //redirrct

        window.location.href = "index.html";
        
    }else{
            error.innerText ="Invalid Email or Password";
        }
}



function togglePassword(){

    let passwordInput = document.getElementById("password");

    if(passwordInput.type === "password"){
        passwordInput.type ="text";
    
    }else{
        passwordInput.type = "password";
    }
}

function toggleMenu(){
    let menu = document.getElementById("menu")
    let icon = document.getElementById("menuIcon");

    menu.classList.toggle("show");

    if(menu.classList.contains("show")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    }else{
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
}