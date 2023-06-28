const form = document.querySelector('#form a')
const btns = document.querySelectorAll('.btn-rounded')




btns.forEach(btn =>{
    btn.addEventListener('click', function (e){
        e.preventDefault()
         
        if(btn.classList.contains('active')){
            btn.classList.remove('active')
    
            alerts(message, type)
           return
        }
    
        btn.classList.add('active')
    
        console.log('seleccionando..')
    })
})


function alerts(message, type){


const container= document.querySelector('#message')
const alert_message= document.createElement('p')


if(type==='error'){

    alert_message.classList.add('error')
    alert_message.innerText= message
    container.appendChild(alert_message)

}else{
    alert_message.classList.add('good')
    alert_message.innerText= message
    container.appendChild(alert_message)
}



}