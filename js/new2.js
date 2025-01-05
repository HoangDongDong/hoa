function init(){
    
    var comfirm_name = document.getElementById("comfirm_name");
    comfirm_name.innerHTML = sessionStorage.lname + " " + sessionStorage.fname ;

    var comfirm_email = document.getElementById("comfirm_email");
    comfirm_email.innerHTML = sessionStorage.email;

    var comfirm_phone = document.getElementById("comfirm_phone");
    comfirm_phone.innerHTML = sessionStorage.phone;
    
    var comfirm_year = document.getElementById("comfirm_year");
    comfirm_year.innerHTML = sessionStorage.year;

}


window.onload = init;
