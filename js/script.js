const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('li');

// Store the total number of images
const slideCount = slides.length;
let activeSlide = 0;

// To change the images dynamically every 
// 5 Secs, use SetInterval() method
setInterval(() => {
slides[activeSlide].classList.remove('active');
activeSlide++;
if (activeSlide === slideCount) {
	activeSlide = 0;
}
slides[activeSlide].classList.add('active');
}, 2000);


// form empty validation
const form = document.getElementById('myForm');
    const errorMessagesDiv = document.getElementById('errorMessages');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      errorMessagesDiv.innerHTML = '';
      const requiredFields = form.querySelectorAll('[required]');
      requiredFields.forEach((field) => {
        if (field.value.trim() === '') {
          const fieldName = field.getAttribute('name');
          const errorMessage = document.createElement('p');
          errorMessage.textContent = `${fieldName} is required.`;
          errorMessagesDiv.appendChild(errorMessage);
        }
      });
    });

// validate email
const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  
  const validate = () => {
    const $result = $('#result');
    const email = $('#email').val();
    $result.text('');
  
    if(validateEmail(email)){
      $result.text(email + ' is valid.');
      $result.css('color', 'green');
    } else{
      $result.text(email + ' is invalid.');
      $result.css('color', 'red');
    }
    return false;
  }
  
  $('#email').on('input', validate);
