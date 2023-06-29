const form = document.querySelector('#form ')
const btns = document.querySelectorAll('#form .btn-rounded')

form.addEventListener('submit', sending)

function BNTS (){}
const btn = new BNTS ()




btns.forEach((btnt, i) =>{
    btnt.addEventListener('click', function (e){
        e.preventDefault()
        
        btns.forEach((btnt, index)=>{

            console.log(i, index)
            i >= index ? btnt.classList.add('active') :
            btnt.classList.remove('active')
        })

    })
})



function sending(e){
e.preventDefault()
btn.alerts('Your feedback has been sent it ', 'good')

console.log('seleccion..')

}


BNTS.prototype.alerts = function(message, type){
    const container= document.querySelector('#message')
    const alert_message= document.createElement('p')
    const icons = document.createElement('i')
    
    if(type==='error'){
        
        alert_message.classList.add('error')
        alert_message.innerText= message
        icons.classList.add('bi','bi-x-circle')
        alert_message.appendChild(icons)
        container.appendChild(alert_message)
    
    }else{
        
        alert_message.classList.add('good')
        alert_message.innerText= message
        icons.classList.add('bi','bi-check-circle')
        alert_message.appendChild(icons)
        container.appendChild(alert_message)
    }
    setTimeout(() => {
        alert_message.remove()
    
    }, 3000);
    
    

}

