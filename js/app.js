document.addEventListener('DOMContentLoaded', function(){


    const opiniones =  document.querySelectorAll('.rating-number');
    const banderaRaiting = document.querySelector('#rating-vand');
    const banderaResult = document.querySelector('#result-vand');
    const score = document.querySelector('#score-score')
    const button = document.querySelector('#button-submit');
    const load = document.querySelector('.sk-circle');

   
    opiniones.forEach(function(opinion){
        opinion.addEventListener('click', (e) =>{
            //Eliminar la clase de todas las opciones
            opiniones.forEach( (op) =>{ 
                op.classList.remove('rating-number__active');
            });
            opinion.classList.add('rating-number__active');
            score.textContent = e.target.value;
             button.addEventListener('click', swipeContent); /* A diferencia de aca, que realiza la accion */
            /* button.addEventListener('click', swipeContent(e)); */ /* Al pasarle un valor se activa al instante */
            
        })
    })


     function swipeContent(){
        load.classList.remove('disabled');
        banderaRaiting.classList.add('disabled');

        setTimeout( () => {
            banderaResult.classList.remove('disabled');
            load.classList.add('disabled')
        }, 3000)

     
     }



    
})