// Envoi Mail 

emailjs.init("n-MoajW8-QpNoNbgR");

document.getElementById("form-contact").addEventListener("submit", function (event) {
    event.preventDefault();
    emailjs.sendForm("service_7oh971p", "template_b4zc339", this)
        .then(() => alert("Email sent successfully!"))
        .catch(error => alert("Error: " + JSON.stringify(error)));
});