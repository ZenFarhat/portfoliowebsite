const travellyIcon = document.querySelector('.travelly')
const box = document.querySelector(".box")


travellyIcon.addEventListener('click', () => {
    box.classList.toggle("hidden")
})