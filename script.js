
document.addEventListener('DOMContentLoaded', function() { 
    console.log('DOM fully loaded and parsed'); 
}); 

document.querySelectorAll('.navigation a').forEach(link => { 
    link.addEventListener('mouseover', function() { 
        this.style.color = '#f8b489'; 
    }); 
    link.addEventListener('mouseout', function() { 
        this.style.color = '#b67b73'; 
    }); 
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) { 
        e.preventDefault(); 
         
        let name = document.getElementById('name').value; 
        let email = document.getElementById('email').value; 
        let message = document.getElementById('message').value; 
         
        console.log('Форма відправлена:'); 
        console.log('Ім\'я:', name); 
        console.log('Email:', email); 
        console.log('Повідомлення:', message); 
         
        alert('Дякуємо за ваше повідомлення!'); 
        this.reset(); 
    });
}


const slides = document.querySelectorAll('#imageSlider img');
if (slides.length > 0) {
    let currentSlide = 0; 
     
    function showSlide(n) { 
        slides.forEach(slide => slide.style.display = 'none'); 
        slides[n].style.display = 'block'; 
    } 
     
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', function() { 
            currentSlide = (currentSlide + 1) % slides.length; 
            showSlide(currentSlide); 
        }); 
         
        prevBtn.addEventListener('click', function() { 
            currentSlide = (currentSlide - 1 + slides.length) % slides.length; 
            showSlide(currentSlide); 
        }); 
    }
     
    showSlide(currentSlide);
}