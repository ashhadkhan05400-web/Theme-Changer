console.log("js is running")

let moon = document.querySelector(".moon-icon")
let sun = document.querySelector(".sun-icon")
let btn = document.querySelector(".theme-btn")
let h1 = document.getElementsByTagName("h1")[0]


if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "light")
}

document.getElementById("themeToggle").addEventListener("click", function () {


    let save = localStorage.getItem("theme")

    if (save === "light") {
        sun.style.display = "none"
        moon.style.display = "flex"
        btn.style = "background: #333;"
        document.body.style.backgroundColor = "black"
        h1.style.color = "white"
        localStorage.setItem("theme", "dark")

    }

    else if (save === "dark") {
        sun.style.display = "flex"
        moon.style.display = "none"
        btn.style = "background: #f0f0f0;"
        document.body.style.backgroundColor = "white"
        h1.style.color = "rgb(29, 91, 227)"
        localStorage.setItem("theme", "light")

    }

    // else {
    //     sun.style.display = "flex"
    //     moon.style.display = "none"
    //     btn.style = "background: #f0f0f0;"
    // }


})

