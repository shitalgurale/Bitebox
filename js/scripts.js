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