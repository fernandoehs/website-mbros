function sendMail(params){
    
    var tempParams={
 from_name: document.getElementById("fromName").value,
 to_name: document.getElementById("toName").value,
 message: document.getElementById("msg").value,
    };
    emailjs.send('service_9boxrub','template_x0ny8o9', tempParams)
    .then(function(res){
        
        console.log("success",res.status);

    })
    document.getElementById("submitted").style.visibility = "visible";
}


