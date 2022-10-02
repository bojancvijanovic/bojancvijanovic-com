(() => {
    const spinningLogo = document.getElementById('logo-spin');
    const spin = () => {
        const addSpinningClass = () => {
            spinningLogo.classList.add('logo-animate');
        }
        const removeSpinningClass = () => {
            spinningLogo.classList.remove('logo-animate');
        }

        if (spinningLogo.classList.contains('logo-animate')) {
            removeSpinningClass();
            setTimeout(addSpinningClass, 50);
            setTimeout(removeSpinningClass, 1000);
        } else {
            addSpinningClass();
            setTimeout(removeSpinningClass, 1000)
        }
    }
    spinningLogo.addEventListener('click', spin);
})();

