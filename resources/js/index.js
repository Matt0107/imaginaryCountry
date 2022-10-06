const button = document.getElementById("menu-btn");
const menuItems = document.querySelectorAll(".menuItem");

function toggleMenu() {
  button.checked=false;
}

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

const text = document.querySelectorAll(".placeDescription");
const img = document.querySelectorAll(".place");

// image overlay for mobile version

window.onresize = function () {
  for (let i = 0; i < img.length; i++) {
    if (window.innerWidth < 896) {
      text[i].style.display = "none";
      img[i].addEventListener("mouseover", function () {
        if (window.innerWidth < 896) {
          text[i].style.display = "block";
        }
      });
      text[i].addEventListener("mouseover", function () {
        if (window.innerWidth < 896) {
          text[i].style.display = "block";
        }
      });
      text[i].addEventListener("mouseout", function () {
        if (window.innerWidth < 896) {
          text[i].style.display = "none";
        }
      });
    } else {
      text[i].style.display = "block";
    }
  }
};

// header background transition

const background=document.querySelector('.header');

window.addEventListener('scroll', function(){
  if (window.scrollY >= 60){
    background.classList.add('headerBackground')
  }else{
    background.classList.remove('headerBackground')
  }
})
