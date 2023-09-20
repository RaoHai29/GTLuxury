function SendMail() {
    let boat = document.getElementById("user_boat");
    let boattext = boat.options[boat.selectedIndex].text;
    let local = document.getElementById("user_location");
    let localtext = local.options[local.selectedIndex].text;

    let params = {
        user_name: document.getElementById("user_name").value,
        user_email: document.getElementById("user_email").value,
        user_phone: document.getElementById("user_phone").value,
        user_boat: boattext,
        user_location: localtext,
        user_date: document.getElementById("user_date").value
    };

    emailjs.send("service_iprvfxh","template_l9nnc3t",params)
        .then(function (res) {
            alert("Success! " + res.status);
        })
        .catch(function (error) {
            console.error("Error sending email:", error);
        });
}
