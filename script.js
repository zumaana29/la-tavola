function scrollToSection(id) {

    let section = document.getElementById(id);

    section.scrollIntoView({
        behavior: "smooth"
    });

}

let reserveBtn = document.querySelectorAll(".reserveBtn");

reserveBtn.forEach(function(button) {

    button.addEventListener("click", function() {

        scrollToSection("form");

    });

});

let viewourmenu = document.getElementById("viewourmenu");

viewourmenu.addEventListener("click", function() {

    scrollToSection("menu-head");

});



let reservationForm = document.querySelector(".reservation-form");

reservationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Your reservation request has been submitted!");

});

let newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let statusMsg = document.getElementById("statusMsg");

    statusMsg.style.display = "block";

    newsletterForm.reset();

    setTimeout(function() {

        statusMsg.style.display = "none";

    }, 3000);

});