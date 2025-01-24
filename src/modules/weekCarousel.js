export function createCarousel(startingIndex = 0, containerSelector, prevSelector, nextSelector, itemSelector, itemsVisible, gap, hideMode) {
    const container = document.querySelector(containerSelector);
    const prevButton = document.querySelector(prevSelector);
    const nextButton = document.querySelector(nextSelector);

    if (!container || !prevButton || !nextButton) {
        console.error("Invalid selectors");
        return;
    }

    let currentIndex = startingIndex;

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex=currentIndex-3;;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', () => {
        const totalItems = document.querySelectorAll(itemSelector).length;

        if (currentIndex < totalItems - itemsVisible) {
            currentIndex=currentIndex+3;
            updateCarousel();
        }
    });

    function updateCarousel() {
        const totalItems = document.querySelectorAll(itemSelector).length;

        if (hideMode === 'hidden') {
            prevButton.classList.toggle('hidden', currentIndex === 0);
            nextButton.classList.toggle('hidden', currentIndex >= totalItems - itemsVisible);
        } else if (hideMode === 'block') {
            prevButton.disabled = currentIndex === 0;
            nextButton.disabled = currentIndex >= totalItems - itemsVisible 
        }

        const itemWidth = document.querySelector(itemSelector).offsetWidth;
        const offset = -currentIndex * (itemWidth + gap);
        container.style.transform = `translateX(${offset}px)`;

        if (currentIndex === 9 && gap === 10) {
                    container.style.transform = `translateX(${offset+115}px)`;
        }
        if (currentIndex === 42) {
                    container.style.transform = `translateX(${offset-20}px)`;
        }
    }
    updateCarousel()
}
