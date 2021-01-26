const burger = document.querySelector('.burger')
const navList = document.querySelector('.nav-list')
const navItem = document.querySelectorAll('.nav-item')


burger.addEventListener('click', () => {
    toggleNav()
})


navItem.forEach(navOption => {
    navOption.addEventListener('click', () => {
        toggleNav()
    })
})


