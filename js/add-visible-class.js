//To add a class to a particular section when it becomes visible in the viewport,
document.addEventListener('DOMContentLoaded', function () {
     const sections = document.querySelectorAll('.section');

     const observerOptions = {
         root: null,
         rootMargin: '0px',
         threshold: 0.5, // Adjust this threshold as needed
     };

     const sectionObserver = new IntersectionObserver(entries => {
         entries.forEach(entry => {
             if (entry.isIntersecting) {
                 entry.target.classList.add('visible');
             } else {
                 $(".div-text").addClass('d-none');
                 entry.target.classList.remove('visible');
             }
         });
     }, observerOptions);

     sections.forEach(section => {
         sectionObserver.observe(section);
     });
 });