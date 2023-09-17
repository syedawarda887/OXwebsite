
  function signin(){

var email = document.getElementById("email").value;



console.log(email);









            if (email.length >9) {
                localStorage.setItem("useremail",email);
                    window.location = "dashboard.html";
                }else {
                alert("Enter your Email")    
            }
      
            
            
}







function login(){

var email = document.getElementById("email").value;
var pass = document.getElementById("passwordd").value;


var localEmail = localStorage.getItem("useremail")
var localPassword= localStorage.getItem("password")


if(email == localEmail && pass == localPassword){
    alert("login success");
    window.location.href = "signup.html"
}else{
    alert("crediential is wrong")
}







}











function signup(){

    var Fname = document.getElementById("Fname").value;
    var Lname = document.getElementById("Lname").value;
    var pname = document.getElementById("pname").value;
    var dname = document.getElementById("dname").value;
    var pwname = document.getElementById("pwname").value;
    var cpname = document.getElementById("cpname").value;
  
    
    
    console.log(Fname);
    console.log(Lname);
    console.log(pname);
    console.log(dname);
    console.log(pwname);
    



    if(Fname.length >3){
        if(Lname.length >3){
            if(pname.length >3){
                if(dname.length >3){
                    if(pwname.length >3){
                        if(cpname.length >3){
                            if(pwname == cpname){
                                    localStorage.setItem("firstName",Fname);
                                    localStorage.setItem("lastName",Lname);
                                    localStorage.setItem("phoneNumber",pname);
                                    localStorage.setItem("date",dname);
                                    localStorage.setItem("password",pwname);
                                    
                                    alert("account created")
                                    window.location.href = "login.html"
                                    
                            }else{
                                alert("password is not matched");
                            }
                            
                        }else{
                            alert("confirm password field is  empty");
                        }
                    }else{
                        alert("password field is  empty");
                    }
                }else{
                    alert("date is not fill");
                }
            }else{
                alert("Phone number is not fill");
            }
        }else{
            alert("Last name is not fill");
        }
    }else{
        alert("first name is not fill")
    }


   
    
    
    




    }
    