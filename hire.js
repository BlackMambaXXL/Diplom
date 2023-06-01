window.addEventListener('DOMContentLoaded', () => {

    // Анимации кнопок регистрации и авторизации
    const button1 = document.querySelector('.header-signin_button');
    const buttons = document.querySelectorAll('.blue-button');
  
    function moveButton(e, button) {
      const boundingRect = button.getBoundingClientRect();
      const xPosition = e.clientX - boundingRect.left - (boundingRect.width / 2);
      const yPosition = e.clientY - boundingRect.top - (boundingRect.height / 2);
  
      const maxX = 10; 
      const maxY = 10; 
      const moveX = Math.min(Math.max(-maxX, xPosition), maxX);
      const moveY = Math.min(Math.max(-maxY, yPosition), maxY);
  
      button.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
  
    function resetButton(button) {
      button.style.transform = '';
    }
  
    button1.addEventListener('mousemove', e => moveButton(e, button1));
    button1.addEventListener('mouseleave', () => resetButton(button1));
  
    buttons.forEach(button => {
      button.addEventListener('mousemove', e => moveButton(e, button));
      button.addEventListener('mouseleave', () => resetButton(button));
    });
  
  
    // Бургер-меню
    $(document).ready(function(){
      $('.header__burger').click(function(event) {
          $('.header__burger,.header-navigation').toggleClass('active');
      });
    });
  
    // модальное окно
  
    const openPopUp = document.getElementById('open_pop_up');
    const closePopUp = document.getElementById('pop_up_close');
    const popUp = document.getElementById('pop_up');
    const overlay = document.querySelector('.pop_up_content');
  
    openPopUp.addEventListener('click', function(e){
      e.preventDefault();
      popUp.classList.add('active');
    });
  
    closePopUp.addEventListener('click', () =>{
      popUp.classList.remove('active');
      
    });
  
    document.addEventListener('keydown', function(e) {
    if( e.key == "Escape" ){
      popUp.classList.remove('active');
    }
    });
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
          popUp.classList.remove('active');
      }
    });

    // Слайдер

    $(document).ready(function() {
        // Константы
        const slides = $('.slide');
        const indicators = $('.indicator');
        const slideTimer = 5000; // время между автоматическим переключением слайдов
      
        // Первоначальная установка индикаторов
        indicators.first().addClass('active-indicator');
      
        // Функция для переключения к следующему слайду
        function nextSlide() {
          const activeSlide = $('.active-slide');
          const activeIndicator = $('.active-indicator');
      
          let nextSlide, nextIndicator;
      
          if (activeSlide.next('.slide').length) {
            nextSlide = activeSlide.next('.slide');
            nextIndicator = activeIndicator.next('.indicator');
          } else {
            nextSlide = slides.first();
            nextIndicator = indicators.first();
          }
      
          activeSlide.removeClass('active-slide');
          nextSlide.addClass('active-slide');
      
          activeIndicator.removeClass('active-indicator');
          nextIndicator.addClass('active-indicator');
        }
      
        // Запуск автоматического переключения слайдов
        let slideInterval = setInterval(nextSlide, slideTimer);
      
        // Обработчик кликов по индикаторам
        indicators.click(function() {
          const targetIndex = $(this).index();
          const currentSlide = $('.active-slide');
          const currentIndicator = $('.active-indicator');
      
          if (currentIndicator.index() !== targetIndex) {
            const targetSlide = slides.eq(targetIndex);
      
            currentSlide.removeClass('active-slide');
            targetSlide.addClass('active-slide');
      
            currentIndicator.removeClass('active-indicator');
            $(this).addClass('active-indicator');
          }
      
          clearInterval(slideInterval);
          setTimeout(() => {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, slideTimer);
          }, 5000);
        });
      });
      
      
  });