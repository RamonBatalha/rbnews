function showMenu () {
    let menuMobile = document.querySelector(".menu-mobile");
    // console.log(menuMobile)
    // console.log("cliquei")

// verificando se tem a classe open, se não, adiciona a class open
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "close_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "hamburguer_white_36dp.svg";
    }
}