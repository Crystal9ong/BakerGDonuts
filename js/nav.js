//---------------- burger ----------------//
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_open');
    const navLinks = document.querySelectorAll('.nav_open li')

    burger.addEventListener('click', () => {
        // toggle Links
        // nav.classList.toggle('nav_open-active');
        if(nav.classList.contains('nav_open-active')){
            nav.classList.remove('nav_open-active');
            setTimeout(function(){
                nav.style.display = 'none';
            },1000);
            
        }else{
            nav.style.display = 'block';
            setTimeout(function(){
                nav.classList.add('nav_open-active');
            },100);
        }

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle');
    });

}

navSlide();