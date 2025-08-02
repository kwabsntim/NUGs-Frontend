document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    if (hamburger) {
        hamburger.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    }

    // Reveal cards on scroll
    function revealCards() {
        const cards = document.querySelectorAll('.testimonial-card');
        const triggerBottom = window.innerHeight * 0.85;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                card.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', revealCards);
    revealCards(); // Initial reveal

    // Counter animation
    function animateCounter(id, finalNumber, speed) {
        let count = 0;
        const counterElement = document.getElementById(id);
        const increment = Math.ceil(finalNumber / 100);

        function updateCounter() {
            if (count < finalNumber) {
                count += increment;
                if (count > finalNumber) count = finalNumber;
                counterElement.textContent = count;
                setTimeout(updateCounter, speed);
            }
        }
        if (counterElement) updateCounter();
    }

    // Popup system
    let selectedCourse = "";

    window.selectCourse = function (course) {
        selectedCourse = course;
        document.getElementById("popupTitle").innerText = `Select Level for ${course}`;
        document.getElementById("levelPopup").style.display = "flex";
    };

    window.closePopup = function () {
        document.getElementById("levelPopup").style.display = "none";
    };

    window.goToLevel = function (level) {
        const courseEncoded = encodeURIComponent(selectedCourse);
        window.location.href = `/files/${courseEncoded}/${level}`;
    };
});
