
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
let currentColor = '';

 buttons.forEach(button=>{
    button.addEventListener('click', function(e) {
        const selectedColor = e.target.id;

        if( body.style.backgroundColor === selectedColor ){
            body.style.backgroundColor = '';
            currentColor = '';
        }
        else{
            body.style.backgroundColor = selectedColor;
            currentColor = selectedColor;
        }
    });
});

