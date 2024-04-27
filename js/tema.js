const tema = document.querySelector('#tema');
const body = document.querySelector('body');

//resgatando o valor armazenado se for diferente de NULO
if (localStorage.getItem('tema') != null){

    tema.value = localStorage.getItem('tema');
    body.classList.add(tema.value);
}

    else{
        tema.value = 'dark';
    }


tema.addEventListener('change', function () {

    body.classList.toggle('light');

    //guarda essa informação no browser
    localStorage.setItem('tema', tema.value);

})