const WHATSAPP_NUMBER = "919785770641";


/* CAR ENQUIRY */

function buyCar(carName) {

    const message =
        "Hello Himanshi Cars,%0A%0A" +
        "I am interested in:%0A" +
        encodeURIComponent(carName) +
        "%0A%0A" +
        "Please send me the price, availability " +
        "and complete details.";

    const whatsappURL =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        message;

    window.open(
        whatsappURL,
        "_blank"
    );
}


/* CONTACT FORM */

function sendEnquiry(event) {

    event.preventDefault();

    const name =
        document.getElementById("customerName").value;

    const phone =
        document.getElementById("customerPhone").value;

    const email =
        document.getElementById("customerEmail").value;

    const message =
        document.getElementById("customerMessage").value;


    const whatsappMessage =
        "Hello Himanshi Cars,%0A%0A" +

        "Name: " +
        encodeURIComponent(name) +
        "%0A" +

        "Phone: " +
        encodeURIComponent(phone) +
        "%0A" +

        "Email: " +
        encodeURIComponent(email) +
        "%0A" +

        "Car Enquiry: " +
        encodeURIComponent(message);


    const whatsappURL =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        whatsappMessage;


    window.open(
        whatsappURL,
        "_blank"
    );


    document
        .querySelector(".contact-section form")
        .reset();
}
