const body = document.querySelector('body')
const btnOpen = document.getElementById('btn-open')
const closeMenu = document.querySelectorAll('[data-close="menu"]')
const btnLogin = document.querySelector('.btn-register')
const btnFooter = document.querySelector('#footer button')

console.log(btnFooter)

btnFooter.addEventListener('click', e => {

    window.scrollTo(0, 0)

})

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
