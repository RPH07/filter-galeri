//Fungsi hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu-list");
const menuItem = document.querySelectorAll(".nav-item");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

menuItem.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

//Jquery
$(document).ready(function() {
    $(".filter-btn").on("click", function() {
        $(".filter-btn").removeClass("active");
        $(this).addClass("active");
        let category = $(this).data("filter");
        if (category === "all") {
            $(".card").show('500');
        } else {
            $(".hidden-card").hide('500');
            $(category).show('500');
        }
    });
});





