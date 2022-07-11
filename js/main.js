const headerBg = () => {
    const header = document.querySelector('.js-header')
    window.addEventListener('scroll', () => {
        this.scrollY > 0 ? header.classList.add('bg-reveal') : header.classList.remove('bg-reveal')
    })
}
headerBg()