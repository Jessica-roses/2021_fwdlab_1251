function validate(){
    let uname = document.getElementById("name").value;
    if(uname.length < 6)
        alert("Invalid usname");

    let pass = document.getElementById("password").value;
    if(pass.length < 6)
        alert("Invalid password");
    
    let email = document.getElementById("email").value;
    if(email != "hey@123")
        alert("Invalid email");
    
    let phone = document.getElementById("phno").value;
    if(phone.length > 10 || phone.length < 10)
        alert("invalid num");
    
}