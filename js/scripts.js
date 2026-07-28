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

// ================= CART FUNCTIONALITY =================


let cartRows = document.querySelectorAll("tbody tr:not(.grand-total)");



cartRows.forEach(function(row){


    let plusBtn = row.querySelector(".plus");
    let minusBtn = row.querySelector(".minus");
    let qty = row.querySelector(".qty");
    let price = row.querySelector(".price");
    let removeBtn = row.querySelector(".remove");


    // PLUS BUTTON

    plusBtn.onclick = function(){

        let quantity = Number(qty.innerText);

        quantity++;

        qty.innerText = quantity;

        updateCart();

    }



    // MINUS BUTTON

    minusBtn.onclick = function(){

        let quantity = Number(qty.innerText);


        if(quantity > 1){

            quantity--;

            qty.innerText = quantity;

        }


        updateCart();

    }



    // REMOVE BUTTON

    removeBtn.onclick = function(){

        row.remove();

        updateCart();

    }


});





// UPDATE CART TOTAL

function updateCart(){


    let rows = document.querySelectorAll("tbody tr:not(.grand-total)");

    let grandTotal = 0;



    rows.forEach(function(row){


        let quantity = Number(
            row.querySelector(".qty").innerText
        );


        // Remove $ sign

        let price = Number(
            row.querySelector(".price")
            .innerText
            .replace("$","")
        );



        let productTotal = quantity * price;



        row.querySelector(".total").innerText =
        "$" + productTotal;



        grandTotal += productTotal;



    });



    // Update Grand Total

    document.querySelector(".grand-price").innerText =
    "$" + grandTotal;


}