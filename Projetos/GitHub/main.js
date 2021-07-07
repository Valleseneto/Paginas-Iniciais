function abrirJanela(pagina, largura, altura) {
        
    var esquerda = (screen.width - largura)/2;
    var topo = (screen.height - altura)/2;
    
    minhaJanela = window.open(pagina,'','height=' + altura + ', width=' + largura + ', top=' + topo);
    }