function validateform(){
    var name = document.form.username.value;
    var email = document.form.email.value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var number = document.form.number.value;
    var password = document.form.password.value;
    var radio = document.form.radio.checked;

    var status=true;
    
    
   if(name==""){
    document.getElementById("user-error").innerHTML="Username is required";
   status=false;
   }else{
    document.getElementById("user-error").innerHTML="";


   }
   if(email==""){
    document.getElementById("email-error").innerHTML="Email id is required";
    status=false;
   }else if(!email.match(emailPattern)){
    document.getElementById("email-error").innerHTML="Email is invalid";
    status=false;

   }else{
    document.getElementById("email-error").innerHTML="";
   }
   if(number==""){
    document.getElementById("num-error").innerHTML="Phone number is required";
    status=false;
   }else{
    document.getElementById("num-error").innerHTML= "";
   }
   if(password==""){
    document.getElementById("pass-error").innerHTML="Password is required";
    status=false;
   }else if(password.length<8){
    document.getElementById("pass-error").innerHTML="Password must be atleast 8 characters long";
    status=false;
   }else{
    document.getElementById("pass-error").innerHTML="";
   }
   if(status && !radio){
    alert("Please accept terms and conditions");
    status=false;
   }
   return status;

  
   
}

