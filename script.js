// Function to handle booking events
function bookEvent(type) {
    alert(`You have selected the ${type} package. Our team will reach out to you!`);
}

// Function to handle booking tickets
function bookTicket(type) {
    alert(`You have selected the ${type} package. Proceed to payment.`);
}

// Countdown Timer for Conference Page
function countdown() {
    let eventDate = new Date("2025-05-10T09:00:00").getTime();
    let timer = setInterval(function () {
        let now = new Date().getTime();
        let distance = eventDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("countdown").innerHTML = "Event Started!";
        }
    }, 1000);
}

// Lightbox for Gallery Page
function openLightbox(img) {
    document.getElementById('lightbox').style.display = 'flex';
    document.getElementById('lightbox-img').src = img.src;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Star Rating for Contact Page
document.addEventListener('DOMContentLoaded', function () {
    var stars = document.querySelectorAll('.star-rating i');

    function clearStars() {
        for (var j = 0; j < stars.length; j++) {
            stars[j].classList.remove('bxs-star');
            stars[j].classList.add('bx-star');
            stars[j].style.color = 'gray';
        }
    }

    for (var i = 0; i < stars.length; i++) {
        stars[i].setAttribute('data-index', i);
        stars[i].addEventListener('click', function () {
            var index = this.getAttribute('data-index');

            clearStars();

            for (var k = 0; k <= index; k++) {
                stars[k].classList.remove('bx-star');
                stars[k].classList.add('bxs-star');
                stars[k].style.color = 'gold';
            }
        });
    }
});