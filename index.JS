function mostrarsenha(){
    var ipsenha = document.getElementById('senha');
    var olhar = document.getElementById('olho');

    if(ipsenha.type ==='password'){
        ipsenha.setAttribute('type','text')
        olhar.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    }else{ipsenha.setAttribute('type','password')
        olhar.classList.replace('bi-eye-slash-fill','bi-eye-fill')}
}


