const form = document.getElementById('form-A-B');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = document.getElementById('campo-A')
    const campoB = document.getElementById('campo-B')
    const campoAValue = campoA.value;
    const campoBValue = campoB.value;
    
    if(campoBValue > campoAValue){
        document.querySelector('.success-message').style.display = 'block';

        campoA.value = ' ';
        campoB.value = ' ';


    } else {
        campoA.style.border = '1px solid red'
        campoB.style.border = '1px solid red'
        document.querySelector('.error-message').style.display = 'block';
    }
})

