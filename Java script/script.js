
document.addEventListener('DOMContentLoaded', () => {
    
    const faBars = document.querySelector('.fa-bars');
    const navbar = document.querySelector('.navbar');
    const header = document.querySelector('header');
  
   
    faBars.addEventListener('click', () => {
      faBars.classList.toggle('fa-times');
      navbar.classList.toggle('nav-toggle');
    });
  
    
    const handleScrollLoad = () => {
      faBars.classList.remove('fa-times');
      navbar.classList.remove('nav-toggle');
  
      if (window.scrollY > 30) {
        header.classList.add('header-active');
      } else {
        header.classList.remove('header-active');
      }
    };
  
    
    window.addEventListener('scroll', handleScrollLoad);
    window.addEventListener('load', handleScrollLoad);
  });