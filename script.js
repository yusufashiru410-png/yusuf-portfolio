// ======================
// DARK MODE
// ======================

const darkBtn = document.getElementById("darkModeBtn");

if (darkBtn) {
    darkBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            darkBtn.innerHTML = "☀ Light Mode";
        } else {
            darkBtn.innerHTML = "🌙 Dark Mode";
        }
    });
}

// ======================
// SCROLL TO TOP
// ======================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (topBtn) {
        if (window.scrollY > 200) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    }

    document.querySelectorAll("section").forEach(section => {

        const position = section.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            section.classList.add("show");
        }

    });

});

if (topBtn) {
    topBtn.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
}
// ======================
// MOBILE MENU
// ======================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){
    menuBtn.addEventListener("click", function(){
        navLinks.classList.toggle("active");

        if(navLinks.classList.contains("active")){
            menuBtn.innerHTML = "✕";
        }else{
            menuBtn.innerHTML = "☰";
        }
    });
}
const contactForm = document.querySelector(".contact form");

if (contactForm) {
    contactForm.addEventListener("submit", function () {
        setTimeout(() => {
            contactForm.reset();
        }, 1000);
    });
}
