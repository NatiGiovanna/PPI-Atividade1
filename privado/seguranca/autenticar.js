export defout function autenticar(requisição, resposta,next) {
    if(requisicao.session.autenticado === true){
        next();
    }else{
        resposta.redirect('/login');
    }


}