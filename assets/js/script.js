function toggleSeta() { // Mostra e esconde uma seta
    const setaParaBaixo = document.querySelector('.seta-para-baixo');
    const darkModebtn = document.querySelector('.dark-mode-btn');

    document.addEventListener('scroll', () => {

        setaParaBaixo.innerHTML = ' ';
    }, { once: true });

    window.addEventListener('scroll', () => {

        if (window.scrollY === 0) {
            setaParaBaixo.innerHTML = `<a href="#sobre"><img src="img/seta para baixo.svg" alt="seta para baixo"></a>`;
            setTimeout(() => {
                document.addEventListener('scroll', () => {

                    setaParaBaixo.innerHTML = ' ';
                }, { once: true });
            }, 1000);
        };
    });
}

toggleSeta();

function bordaMenu() { // Adiciona e remove uma borda para o menu
    const menu = document.querySelector('.menu');

    document.addEventListener('scroll', () => {

        menu.classList.add('borda-menu');
    }, { once: true });

    window.addEventListener('scroll', () => {

        if (window.scrollY === 0) {
            menu.classList.remove('borda-menu');

            setTimeout(() => {
                document.addEventListener('scroll', () => {

                    menu.classList.add('borda-menu');
                }, { once: true });
            }, 1000);
        };
    });
}

bordaMenu();

function darkAndLightMode() {
    const ulMenu = document.querySelector('.ul-dark-mode');
    const buttonMenu = document.querySelector('.dark-mode-img');
    const darkModebtn = document.querySelector('.dark-mode-btn-style');
    const socialIcons = document.querySelector('.social-icons');
    const faleComigo = document.querySelector('.fale-comigo-second-part-last-line');
    const verTodosProjetos = document.querySelector('.ver-todos-portifolio');
    const faleComigoPhone = document.querySelector('.fale-comigo-phone');
    const faleComigoMail = document.querySelector('.fale-comigo-mail');
    const faleComigoMap = document.querySelector('.fale-comigo-first-part-last-line');
    const aspas = document.querySelector('.sobre-third-parte');

    document.addEventListener('click', e => {
        const el = e.target;

        if (el.classList.contains('dark-mode-btn-change')) {
            document.documentElement.style.setProperty('--primary-color', '#242424');
            document.documentElement.style.setProperty('--tertiary-color', '#FFFFFF');
            document.documentElement.style.setProperty('--tertiary-color-lighter', '#f0f0f0');
            document.documentElement.style.setProperty('--primary-color-darker', '#242424');
            document.documentElement.style.setProperty('--secondary-color-darker', '#42a36e');
            document.documentElement.style.setProperty('--quaternary-color', '#383838');
            document.documentElement.style.setProperty('--light-quaternary-color', '#3b3b3b');

            socialIcons.innerHTML = `<div class="instagram-logo"><a href="https://www.instagram.com/joaomarcosgtr/" target="_blank"><img
            src="img/instagram-white.png" alt="logo do instagram" class="instagram"></a></div>
            <div class="github-logo"><a href="https://github.com/Joaomos" target="_blank"><img src="img/github-white.png"
            alt="logo do github" class="github"></a>
            </div>
            <div class="linkedin-logo"><a href="https://www.linkedin.com/in/ojoaomarcosilva/" target="_blank"><img
            src="img/linkedin-white.png" alt="logo do linkedin" class="linkedin"></a></div>`;

            darkModebtn.innerHTML = `<img src="img/light-mode.png" alt="imagem de um sol preto" class="light-mode-btn">`;
            ulMenu.classList.add('light-mode-btn');
            buttonMenu.classList.add('light-mode-btn');

            faleComigo.innerHTML = `<div class="instagram-logo"><a href="https://www.instagram.com/joaomarcosgtr/"
            target="_blank"><img src="img/instagram-white.png" alt="logo do instagram"
            class="instagram"></a></div>
            <div class="github-logo"><a href="https://github.com/Joaomos" target="_blank"><img
            src="img/github-white.png" alt="logo do github" class="github"></a>
            </div>
            <div class="linkedin-logo"><a href="https://www.linkedin.com/in/ojoaomarcosilva/"
            target="_blank"><img src="img/linkedin-white.png" alt="logo do linkedin"
            class="linkedin"></a></div>`;

            verTodosProjetos.innerHTML = `<h2><a href="#">Ver todos projetos <img src="img/seta para frente white.svg" alt="seta para frente"></a></h2>`;

            faleComigoPhone.innerHTML = `<img src="img/phone white.png" alt="Imagem de um telefone" class="fale-comigo-imgs">
            <h3>(34) 9 9990-6718</h3>`;

            faleComigoMail.innerHTML = `<img src="img/mail white.png" alt="Imagem de uma carta" class="fale-comigo-imgs">
            <h3>joaomarcos2827@gmail.com</h3>`;

            faleComigoMap.innerHTML = `<img src="img/map white.png" alt="Imagem de um mapa" class="fale-comigo-imgs">
            <h3>Uberlândia, MG, Brasil</h3>`;

            aspas.innerHTML = `<img src="img/aspas white.png" alt="Imagem de aspas">`;

        };

        if (el.classList.contains('light-mode-btn')) {
            document.documentElement.style.setProperty('--primary-color', '#ffffff');
            document.documentElement.style.setProperty('--tertiary-color', '#000000');
            document.documentElement.style.setProperty('--tertiary-color-lighter', '#383838');
            document.documentElement.style.setProperty('--primary-color-darker', '#e4e4e4');
            document.documentElement.style.setProperty('--secondary-color-darker', '#42a36e');
            document.documentElement.style.setProperty('--quaternary-color', '#f0f0f0');
            document.documentElement.style.setProperty('--light-quaternary-color', '#d6d6d6');

            socialIcons.innerHTML = `<div class="instagram-logo"><a href="https://www.instagram.com/joaomarcosgtr/" target="_blank"><img
            src="img/instagram.png" alt="logo do instagram" class="instagram"></a></div>
            <div class="github-logo"><a href="https://github.com/Joaomos" target="_blank"><img src="img/github.png"
            alt="logo do github" class="github"></a>
            </div>
            <div class="linkedin-logo"><a href="https://www.linkedin.com/in/ojoaomarcosilva/" target="_blank"><img
            src="img/thumbnail_image.png" alt="logo do linkedin" class="linkedin"></a></div>`;

            
            
            darkModebtn.innerHTML = `<img src="img/dark-mode.png" alt="imagem de um sol preto" class="dark-mode-btn-style dark-mode-btn-change">`;
            ulMenu.classList.remove('light-mode-btn');
            buttonMenu.classList.remove('light-mode-btn');

            faleComigo.innerHTML = `<div class="instagram-logo"><a href="https://www.instagram.com/joaomarcosgtr/"
            target="_blank"><img src="img/instagram.png" alt="logo do instagram"
                class="instagram"></a></div>
            <div class="github-logo"><a href="https://github.com/Joaomos" target="_blank"><img
                src="img/github.png" alt="logo do github" class="github"></a>
            </div>
            <div class="linkedin-logo"><a href="https://www.linkedin.com/in/ojoaomarcosilva/"
            target="_blank"><img src="img/thumbnail_image.png" alt="logo do linkedin"
                class="linkedin"></a></div>`;

            verTodosProjetos.innerHTML = `<h2><a href="#">Ver todos projetos <img src="img/seta para frente.svg" alt="seta para frente"></a></h2>`;

            faleComigoPhone.innerHTML = `<img src="img/phone.png" alt="Imagem de um telefone" class="fale-comigo-imgs">
            <h3>(34) 9 9990-6718</h3>`;

            faleComigoMail.innerHTML = `<img src="img/mail.png" alt="Imagem de uma carta" class="fale-comigo-imgs">
            <h3>joaomarcos2827@gmail.com</h3>`;

            faleComigoMap.innerHTML = `<img src="img/map.png" alt="Imagem de um mapa" class="fale-comigo-imgs">
            <h3>Uberlândia, MG, Brasil</h3>`;

            aspas.innerHTML = `<img src="img/aspas.png" alt="Imagem de aspas">`;
        }

    });
}

darkAndLightMode();
