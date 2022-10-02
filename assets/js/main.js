(() => {
    const spinningLogo = document.getElementById('logo-spin');
    const spin = () => {
        if (spinningLogo.classList.contains('logo-animate')) {
            spinningLogo.classList.remove('logo-animate');
            const addClass = () => {
                spinningLogo.classList.add('logo-animate')
            }
            setTimeout(addClass, 50);
        } else {
            spinningLogo.classList.add('logo-animate');
        }
    }
    spinningLogo.addEventListener('click', spin);
})();

