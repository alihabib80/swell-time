const btnEl = document.getElementById('home-btn')
const imgEl = document.querySelector('img')

btnEl.addEventListener('click', e => {
    imgEl.style.visibility = 'visible'
})