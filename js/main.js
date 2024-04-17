const ativadorToast = document.getElementById('btn-checar-emails') //clicamos no botao dessa id vai disparar
    const mensagem = document.getElementById('mensagem-alerta') 

    if(ativadorToast){                                      //vamos seguir a logica de se o btn de ativadorToast for clicado sera dado uma function
        ativadorToast.addEventListener('click',function(){  //e nessa function temos umas const q abriga nosso const mensagem q tras tudo q esta
            const toast = new bootstrap.Toast(mensagem)     //escrito nela ,para mostrar a mensagem é atraves do show
            toast.show()                                                                                      
        })
    }

