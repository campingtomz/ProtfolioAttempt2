
//$('#submit-email').on(click, sendEmail);
//function sendEmail() {
//    let emplate_params ={
//        subject: $('#subject_value').val(),
//        body: $('#body_value').val(),
//        client_name: $('#client_name_value'),
//        client_email: $('#client_email_value')
//    }
//    var service_id = "default_service";
//    var template_id = "test1";
//    emailjs.send(service_id, template_id, template_params);
//}


var myform = $("form#myform");
myform.submit(function (event) {
    event.preventDefault();

    // Change to your service ID, or keep using the default service
    var service_id = "default_service";
    var template_id = "test1";

    myform.find("button").text("Sending...");
    emailjs.sendForm(service_id, template_id, myform[0])
        .then(function () {
            alert("Sent!");
            myform.find("button").text("Send");
        }, function (err) {
            alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
            myform.find("button").text("Send");
        });
    return false;
});