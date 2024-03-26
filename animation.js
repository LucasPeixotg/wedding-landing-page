const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting && entry.target.classList.contains("observer-left")) entry.target.classList.add("show");
    })
})

const hiddenElements = document.querySelectorAll('.observer-left')
hiddenElements.forEach(el => observer.observe(el))