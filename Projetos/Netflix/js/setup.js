$('.owl-carousel').owlCarousel({
    loop:true, // faz um looping dos filmes 
    margin:10, //altera a margem entre um filme e outro
    nav:false, // desabilita aquelas setinhas para navegação entre os filmes
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})