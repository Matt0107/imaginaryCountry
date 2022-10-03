const place = document.querySelector('.popular-place')
const description = document.querySelector('.placeDescription');
const picture = document.querySelector('.place')

picture.addEventListener('click', function () {
    description.classList.toggle('activeDescription')
}
)
