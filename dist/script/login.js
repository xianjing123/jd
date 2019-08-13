let login = document.querySelector('.jd .login')
login.onclick = function (evt) {
    if (evt.target.tagName === 'LI') {
        document.querySelector('.jd .login .active').classList.remove('active')
        evt.target.children[0].classList.add('active')
    }
    if (evt.target.tagName === 'P') {
        document.querySelector('.jd .login .active').classList.remove('active')
        evt.target.classList.add('active')
    }
}