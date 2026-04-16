    const seeMoreBtn = document.querySelector('.see-more-btn');
    const fadeCards = document.querySelectorAll('.testimonial-fade');
    let isExpanded = false;

    seeMoreBtn.addEventListener('click', function (e) {
        e.preventDefault();

        isExpanded = !isExpanded;

        fadeCards.forEach(card => {
            if (isExpanded) {
                card.style.maxHeight = card.scrollHeight + 'px';
                card.classList.add('active');
            } else {
                card.style.maxHeight = '200px';
                card.classList.remove('active');
            }
        });

        this.textContent = isExpanded ? 'See Less' : 'See More';
    });