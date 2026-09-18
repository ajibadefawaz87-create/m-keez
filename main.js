// =========================
// MOBILE NAVIGATION
// =========================

function toggleMenu() {
    const nav = document.getElementById("nav");

    nav.classList.toggle("active");
}


// =========================
// WHATSAPP ORDER
// =========================

function orderItem(item) {

    const phoneNumber = "2348030486292";

    const message =
        `Hello M-KEEZ Cakes & More!%0A%0A` +
        `I would like to order: ${item}.%0A%0A` +
        `Please let me know the available options and price.`;

    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
}


// =========================
// CLOSE MOBILE MENU
// =========================

const navLinks = document.querySelectorAll("#nav a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("nav")
            .classList.remove("active");

    });

});
