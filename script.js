// CONST'SES
const boxAll = document.querySelectorAll(".box")

const ejoyBtn = document.querySelector(".elena-joy-btn")
const travellybtn = document.querySelector(".travelly-btn")
const tdogBtn = document.querySelector(".tindog-btn")


const ejoyBox = document.querySelector(".elena-joy-box")
const travellyBox = document.querySelector(".travelly-box")
const tdogBox = document.querySelector(".tindog-box")


// FUNCTIONALITY
addHidden()



ejoyBtn.addEventListener('click', () => {
    addHidden()
    ejoyBox.classList.remove('hidden')
})


travellybtn.addEventListener('click', () => {
    addHidden()
    travellyBox.classList.remove('hidden')
})

tdogBtn.addEventListener('click', () => {
    addHidden()
    tdogBox.classList.remove('hidden')
})


function addHidden() {
    boxAll.forEach(box => {
        box.classList.add("hidden")
    })
}



