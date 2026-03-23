const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('rating-value');
let currentRating = 0;

stars.forEach((star, index) => {
    // Click to set rating
    star.addEventListener('click', () => {
        currentRating = index + 1;
        updateStars(currentRating);
        ratingValue.textContent = currentRating;
    });

    // Hover effect (light up preceding stars)
    star.addEventListener('mouseover', () => {
        updateStars(index + 1);
    });

    // Mouse out (restore to current rating)
    star.addEventListener('mouseout', () => {
        updateStars(currentRating);
    });
});

function updateStars(rating) {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}
