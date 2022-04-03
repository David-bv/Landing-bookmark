const navbarBoton = document.querySelector('.fa-bars');
const nav2 = document.querySelector('.menuPrueba');
const navToog = document.getElementById('navbarSupportedContent');
const form = document.getElementById('footerForm')
const email = document.getElementById('email')
const msg = document.querySelector('.msgValidation')
const buttonMailto = document.querySelector('#sendMail')

navbarBoton.addEventListener('click', cambio = () => {
    console.log('entre');
    navToog.style.backgroundColor = 'hsl(229, 31%, 21%)';
    navToog.style.color = 'white!important';
    setInterval(actualizar, 3000);
})

form.addEventListener('submit', validation = (e) => {
    e.preventDefault()
    let msj = document.createElement('div');
    msj.setAttribute('class', 'alert alert-danger msjAlert')
    msg.innerHTML = '';
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const mailValidation = expReg.test(email.value)
    
    if (email.value == '') {
        msj.innerHTML = `<p class='pMsj'> ¡Por favor, ingresa un correo válido.!</p>`;
        msg.appendChild(msj);
        setInterval(actualizar, 1200);
    } else if (mailValidation == true) {
        senMail();
    } else {
        msj.innerHTML = `<p class='pMsj'> ¡La dirección no es correcta.!</p>`;
        msg.appendChild(msj);
        setInterval(actualizar, 1200);
    }
})

function senMail() {
    buttonMailto.setAttribute('href', `mailto:bookmark@bookmark.com?subject=nombre${email.value}`)
    buttonMailto.click() 
}

function actualizar() { location.reload(); }

