const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting && entry.target.classList.contains("observer-left")) entry.target.classList.add("show");
        else if(entry.isIntersecting && entry.target.classList.contains("audio-play")) {
            entry.target.classList.remove("audio-play")
            const audio = document.querySelector("audio")
            audio.volume = 0.02
            audio.play()
        }
    })
})

const hiddenElements = document.querySelectorAll('.observer-left')
hiddenElements.forEach(el => observer.observe(el))
observer.observe(document.querySelector(".audio-play"))