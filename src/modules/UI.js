import { search } from "../";

export function initializeEventListeners() {
    const searchButton = document.querySelector(".search-button")
    const searchInput = document.querySelector(".search-input")
    let degreeType = 'metric'

    searchButton.addEventListener('click', () => {
        search(location, degreeType);
    });

    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            const location = searchInput.value.trim()
            console.log(location)
            search(location, degreeType);
        }
    })

    const toggleContainer = document.querySelector('.toggle-container');
    toggleContainer.addEventListener('click', () => {
        toggleContainer.classList.toggle('active');
        degreeType = degreeType === 'metric' ? 'us' : 'metric';
        search(undefined, degreeType)
    });
};