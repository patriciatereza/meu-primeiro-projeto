function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = getHours()    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora>= 12 && hora <18 ){
        //bom dia!
        img.src = 'fotomanha.png'    
    }else if (hora >= 12 && hora < 18){
        //boa tarde!
        img.src = 'fototarde.png'    
    }else {
        //boa noite!
        img.src = 'fotonoite.png'
    }
}
