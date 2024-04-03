function scrollVisibleWeb(){
  const sections = document.querySelectorAll(".item-conteudo");
  console.log(sections);

  if(sections.length){
      const windowMetade = window.innerHeight * 0.7;
      console.log(sections);

      function animaScroll(){
          sections.forEach((section) => {
              const sectionTop = section.getBoundingClientRect().top;
              const isSectionVisible = sectionTop - windowMetade < 0;
              //console.log(sectionTop)
              
              if(isSectionVisible){
                  section.classList.add('ativo');
              }else{
                  section.classList.remove('ativo');
              }
          });
      }

      animaScroll();

      window.addEventListener('scroll', animaScroll)
  }
};

// Função para verificar se uma seção está visível na janela de visualização
scrollVisibleWeb();


const menuMobile = document.querySelector('.menu-mobile');
console.log(menuMobile);

menuMobile.addEventListener('click', () => {
  console.log('Clicou no menu');
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
});


const whatsapp = document.querySelector('.whatsapp');
whatsapp.addEventListener('click', () => {
  console.log('Clicou no whatsapp');

  const numeroTelefone  = '5511957938716'
  const linkWhats = `https://wa.me//${numeroTelefone}?text=Olá%20gostaria%20de%20fazer%20um%20orçamento!`;

  window.open(linkWhats, '_blank');
});

