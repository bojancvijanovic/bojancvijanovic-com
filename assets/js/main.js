(() => {
    const spinningLogo = document.getElementById('logo-spin');
    const spin = () => {



        if (spinningLogo.classList.contains('logo-animate')) {
            spinningLogo.classList.remove('logo-animate');
            const addSpinningClass = () => {
                spinningLogo.classList.add('logo-animate');
            }
            setTimeout(addSpinningClass, 50);
        } else {
            spinningLogo.classList.add('logo-animate');
            const removeSpinningClass = () => {
                spinningLogo.classList.remove('logo-animate');
            }
            setTimeout(removeSpinningClass, 1000)
        }



    }
    spinningLogo.addEventListener('click', spin);
})();

