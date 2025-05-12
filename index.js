document.addEventListener("DOMContentLoaded", (event) => {
    const home = document.getElementById("home")
    fetch("./sections/home.html").then(response => response.text()).then(html => {home.innerHTML = html})

    const about = document.getElementById("about")
    fetch("./sections/about.html").then(response => response.text()).then(html => {about.innerHTML = html})
    
    const education = document.getElementById("education")
    fetch("./sections/education.html").then(response => response.text()).then(html => {education.innerHTML = html})
    
    const portfolio = document.getElementById("portfolio")
    fetch("./sections/portfolio.html").then(response => response.text()).then(html => {portfolio.innerHTML = html})
    
    const contact = document.getElementById("contact")
    fetch("./sections/contact.html").then(response => response.text()).then(html => {contact.innerHTML = html})
});