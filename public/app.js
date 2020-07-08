let icon = document.getElementById("nav-icon");
let sidebar = document.getElementById("sidenav");
let nav_links = document.getElementsByClassName("nav-item");

icon.addEventListener("click", () => {
    icon.classList.toggle("change");
    sidebar.classList.toggle("active");
})

for(let i = 0; i < nav_links.length; i++){
    nav_links[i].addEventListener("click", () => {
        icon.classList.toggle("change");
        sidebar.classList.toggle("active");
    })
}


