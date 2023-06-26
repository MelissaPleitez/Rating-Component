const form = document.querySelector('#form a')
const btns = document.querySelectorAll('.btn-rounded')




btns.forEach(btn =>{
    btn.addEventListener('click', function (e){
        e.preventDefault()
         
        if(btn.classList.contains('active')){
            btn.classList.remove('active')
    
            console.log('ya esta seleccionado..')
           return
        }
    
        btn.classList.add('active')
    
        console.log('seleccionando..')
    })
})


