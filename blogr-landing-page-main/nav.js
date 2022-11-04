const menuBtn = document.querySelector('.btn--menu');

menuBtn.addEventListener('click' , () => {
    const isExpended = JSON.parse(menuBtn.getAttribute('aria-expanded'));
    menuBtn.setAttribute('aria-expanded' , !isExpended)
    
})