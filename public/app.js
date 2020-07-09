let icon = document.getElementById("nav-icon");
let sidebar = document.getElementById("sidenav");
let nav_links = document.getElementsByClassName("nav-item");
let boxes = document.getElementById("box-wrap");

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

(function() {
    let elements;
    let window_height;
  
    function init() {
        elements = document.querySelectorAll('.box');
        window_height = window.innerHeight;
    }
  
    function checkPosition() {
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            let position_top = elements[i].getBoundingClientRect().top;
  
            if (position_top - window_height <= 0) {
                element.classList.add('fade-in');
            }
        }
    }
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
    init();
    checkPosition();
})();
