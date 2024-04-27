//Seleção de DOM (seleção da documentação HTML)

const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const btn = document.querySelector('#btn');

// console.log(peso, altura, btn);

btn.addEventListener('click', function () {

    let valorPeso = peso.value;
    let valorAltura = altura.value;

    // != (Comparação diferença)
    // == (Comparação igualdade)



    if (valorPeso != '' && valorAltura != '') {

        let imc = valorPeso / (valorAltura * valorAltura);

        let classificacao = '';

        if (imc < 18.5) {
            classificacao = 'Magreza';
        }

        else if (imc < 24.99) {
            classificacao = 'Normal';
        }

        else if (imc < 29.99) {
            classificacao = 'Sobrepeso';
        }

        else if (imc < 39.99) {
            classificacao = 'Obesidade';
        }

        else{
            classificacao = 'Obesidade grave';
        }







        //Área do resultado
        const result = document.querySelector('.result');
        result.style.display = 'block';

        //Escrevendo no HTML
        // `` template string
        result.innerHTML = `<h2>Seu IMC é:   ${imc.toFixed(2)} </h2>
                            <h3>Sua classificação é:  ${classificacao} </H3>`;





    }

    else {
        alert('Preencha os campos!');
    }


})
