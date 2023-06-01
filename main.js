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

  // Timer
  const deadLine = '2023-09-01';
  function getTimeRemaining(endTime) {
      let days, hours, minutes, seconds;
      const t = Date.parse(endTime) - Date.parse(new Date());
      if (t <= 0) {
          days = 0;
          hours = 0;
          minutes = 0;
          seconds = 0;
      } else {
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor(((t / (1000 * 60 * 60) % 24)) - 3),
          minutes = Math.floor((t / 1000 / 60) % 60),
          seconds = Math.floor((t / 1000) % 60);
      }

      return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds,
      };
      
  }
  
  function getZero(num) {
      if (num >= 0 && num < 10) {
          return `0${num}`;
      } else {
          return num;
      }
  }

  function setTimer(selector, endTime) {
      const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateTimer, 1000);
      updateTimer();
      function updateTimer() {
          const t = getTimeRemaining(endTime);

          days.innerHTML = getZero(t.days);
          hours.innerHTML = getZero(t.hours);
          minutes.innerHTML = getZero(t.minutes);
          seconds.innerHTML = getZero(t.seconds);

          if (t.total < 0) {
              clearInterval(timeInterval);
          }
      }
  }
  setTimer('.timer', deadLine);
});


