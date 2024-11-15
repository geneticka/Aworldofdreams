function openPanel() {
    document.getElementById("sidePanel").classList.add("open");
}

function closePanel() {
    document.getElementById("sidePanel").classList.remove("open");
}

window.onscroll = function() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 2000) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

const video = document.getElementById('background-video');


