class envioDeEmails{
    constructor(){
        this.btn = document.getElementById("btn")
        this.addEventListener();
    }

     getCampos(){
        const nomeOuEmail = document.getElementById("nomeOuEmail");
        const message = document.getElementById("message")
        if(message.value.length <=2){
            alert("Digite uma mensagem");
        }else{
           const data =  {
            "nameOrEmail":nomeOuEmail.value,
            "message":message.value
        }
            
        fetch("https://api-my-site.herokuapp.com/contact",
        {
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        }).then(response =>{
            if(response.status){
                alert('Mensagem enviada')
                message.value = ""
                nomeOuEmail.value = ""
            }
        
        });
        }
        
    }

    addEventListener(){
        this.btn.addEventListener('click',this.getCampos)
    }


}

new envioDeEmails()