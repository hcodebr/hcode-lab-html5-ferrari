const body = document.querySelector('body')
const btnOpen = document.getElementById('btn-open')
const closeMenu = document.querySelectorAll('[data-close="menu"]')
const btnLogin = document.querySelector('.btn-register')

btnOpen.addEventListener('click', e => {
    body.classList.add('open-menu')
})

closeMenu.forEach(el => {

    el.addEventListener('click', e => {
        body.classList.remove('open-menu')
    })
    
})

btnLogin.addEventListener('click', e => {
    window.location.href = '/login.html'
})

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 44.531274, lng: 10.868766},
      zoom: 14
    });
}
