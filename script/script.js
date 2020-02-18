const startButton = document.querySelector('.start-button'),
      firstScreen = document.querySelector('.first-screen'),
      mainForm = document.querySelector('.main-form'),
      formCalculate = document.querySelector('.form-calculate'),
      endButton = document.querySelector('.end-button'),
      total = document.querySelector('.total'),
      fastRange = document.querySelector('.fast-range');


function showElem(elem) {
  elem.style.display = 'block';
}

function hiddenElem(elem) {
  elem.style.display = 'none';
}

function handlerCallBackForm(event) {
  const target = event.target;

  if (target.classList.contains('want-faster')) {
    target.checked ? showElem(fastRange) : hiddenElem(fastRange);
  }

  

}


startButton.addEventListener('click', function() {
  showElem(mainForm);
  hiddenElem(firstScreen);
});

endButton.addEventListener('click', function() {
  for (const elem of formCalculate.elements) {
    if (elem.tagName === 'FIELDSET') {
      hiddenElem(elem);
    }
  }
  showElem(total);
});

formCalculate.addEventListener('change', handlerCallBackForm);