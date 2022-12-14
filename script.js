const mainContain = document.querySelector(".start-card")
const thankContain = document.querySelector(".end-card")
const submitBtn = document.getElementById("submit-btn")
const rating = document.getElementById("rating")
const rateBtn = document.querySelectorAll(".rate-btn")

submitBtn.addEventListener("click", () => {
    thankContain.classList.replace('hidden','fade-in')
    mainContain.style.display = "none";
})

rateBtn.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
} )
