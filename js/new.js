function init(){
    var clickbutton = document.getElementById("btn");
    clickbutton.onclick = convert;

    var h2 = document.getElementById("ClickH2")
    h2.onclick = h2so4;

    var h3 = document.getElementsByTagName("h3")
    for (var i =0; i < h3.length ; i++ )
    {
        h3[i].onclick = change_p;
    }
    var form = document.getElementById("regform");
    form.onsubmit = saveData;
}

function change_p(){
    var h3 = document.getElementById("of_h3");
    h3.innerHTML = "Change success";
}

function h2so4(){
    var h2click = document.getElementById("if_click_h2");
    h2click.textContent = "bạn đã click vào h2";
}

function convert(){
    var usd = prompt("Enter USD: ")
    var vnd = usd * 25;
    var mess = document.getElementById("mes");
    if (vnd >= 1000){
        mess.textContent= usd + " USD được "+  vnd/1000  + "M VND";
    }
    else {
        mess.textContent = usd + " USD được "+  vnd  + "K VND"
    }
}

function saveData(){
    var fname = document.getElementById("fname").value;
    sessionStorage.fname = fname;
    
    var lname = document.getElementById("lname").value;
    sessionStorage.lname = lname;

    var email = document.getElementById("email").value;
    sessionStorage.email = email;

    var phone = document.getElementById("phone").value;
    sessionStorage.phone = phone;
    
    var year = document.getElementById("year").value;
    sessionStorage.year = year;
}

window.onload = init;
