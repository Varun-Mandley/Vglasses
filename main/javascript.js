let carts =document.querySelectorAll(".add-cart");
for (let i = 0; i <carts.length; i++) {
    carts[i].addEventListener("click", function () { 
        cartsnumber();
    });
}

function onloadcartnumber(){
    let productnumber = localStorage.getItem("cartnumber");
    if (productnumber){
        document.querySelector(".carts span").textContent = productnumber;

    }
}

function cartsnumber(){
    let productnumber = localStorage.getItem("cartnumber");
    // console.log(productnumber,typeof productnumber);
    productnumber = parseInt(productnumber);
    // console.log(productnumber,typeof productnumber);
    if(productnumber){
        localStorage.setItem("cartnumber", productnumber + 1);
        document.querySelector(".carts span").textContent = productnumber + 1;
        
    }
    else{
        localStorage.setItem("cartnumber", 1);
        document.querySelector(".carts span").textContent = 1;

    }

}
onloadcartnumber()
