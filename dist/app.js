/*const carouselSlide = document.querySelector(".carousel-slide")
const carouselImages = document.querySelectorAll(".carousel-slide img")

//Buttons
const prevBtn = document.querySelector("#prevBtn")
const nextBtn = document.querySelector("#nextBtn")

//Counter
let counter = 1
const size = carouselImages[0].clientWidth

carouselSlide.style.transform = "translateX(" + -size * counter + "px)"

// Button listeners

nextBtn.addEventListener("click", () => {
    if (counter >= carouselImages.length - 1) return
    carouselSlide.style.transition = "transform 0.5s ease-in-out"
    counter++
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)"
})

prevBtn.addEventListener("click", () => {
    if (counter <= 0) return
    carouselSlide.style.transition = "transform 0.5s ease-in-out"
    counter--
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)"
})

carouselSlide.addEventListener("transitionend", () => {
    if (carouselImages[counter].id === "lastClone") {
        carouselSlide.style.transition = "none"
        counter = carouselImages.length - 2
        carouselSlide.style.transform = "translateX(" + -size * counter + "px)"
    }
    if (carouselImages[counter].id === "firstClone") {
        carouselSlide.style.transition = "none"
        counter = carouselImages.length - counter
        carouselSlide.style.transform = "translateX(" + -size * counter + "px)"
    }
})*/

// slider drag
const slider = document.querySelector(".items")
let isDown = false
let startX
let scrollLeft

slider.addEventListener("mousedown", e => {
    isDown = true
    slider.classList.add("active")
    startX = e.pageX - slider.offsetLeft
    scrollLeft = slider.scrollLeft
})
slider.addEventListener("mouseleave", () => {
    isDown = false
    slider.classList.remove("active")
})
slider.addEventListener("mouseup", () => {
    isDown = false
    slider.classList.remove("active")
})
slider.addEventListener("mousemove", e => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - slider.offsetLeft
    const walk = (x - startX) * 3 //scroll-fast
    slider.scrollLeft = scrollLeft - walk
})

//video play on hover
const videos = document.querySelectorAll("video")
videos.forEach(video => {
    video.addEventListener("mouseover", function() {
        this.play()
    })
    video.addEventListener("mouseout", function() {
        this.pause()
    })
    video.addEventListener("touchstart", function() {
        this.play()
    })
    video.addEventListener("touchend", function() {
        this.pause()
    })
})

//Horizontal scroll
var item = document.getElementsByTagName("MAIN")[0]

window.addEventListener("wheel", function(e) {
    if (e.deltaY > 0) item.scrollLeft += 100
    else item.scrollLeft -= 100
})
