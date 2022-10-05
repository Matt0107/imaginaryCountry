function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

const text = document.querySelectorAll(".placeDescription");
const img = document.querySelectorAll(".place");

// for (let i=0; i<img.length;i++){
//   img[i].addEventListener('click',function(){
//     text[i].classList.toggle('activeDescription')
//   })
//   text[i].addEventListener('click',function(){
//     text[i].classList.toggle('placeDescription')
//     text[i].style.display='none';
//   })
// }

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
