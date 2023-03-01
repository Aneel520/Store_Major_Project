let data = [];
let Gen="";

function submitHandler(event) {
    event.preventDefault();
    let d ={
        firstName:document.getElementById("firstname").value,
        lastName:document.getElementById("lastname").value,
        age:document.getElementById("age").value,
        password:document.getElementById("password").value,
        rePassword:document.getElementById("re-password").value,
        email:document.getElementById("email").value,
        Gen:Gen
    }
    if (d.password === d.rePassword){
        data.push(JSON.stringify(d));
        console.log(data);
    }
    else{
        alert("enter password and re-password correctly");
        document.getElementById("password").value="";
        document.getElementById("re-password").value="";
    }
    
}

function gender(val){
    Gen=val;
}
