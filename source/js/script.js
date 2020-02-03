'use strict';


//  Модальное окно
var openModal = document.querySelector('.header__contact-item--btn');
var modalWindow = document.querySelector('.modal');
var form = document.querySelector('.modal__form > form');
var nameFieldModal = document.getElementById('name-modal');
var phoneFieldModal = document.getElementById('phone-modal');
var textFieldModal = document.getElementById('question-modal');

openModal.addEventListener('click', function () {
  modalWindow.classList.remove('modal--closed');
  document.body.style.overflow = 'hidden';
  nameFieldModal.focus();

  if (localStorage) {
    nameFieldModal.value = localStorage.getItem('name');
    phoneFieldModal.value = localStorage.getItem('phone');
    textFieldModal.value = localStorage.getItem('text');
  }
});

var closeModalBtn = document.querySelector('.modal__close');

function closeModal() {
  modalWindow.classList.add('modal--closed');
  document.body.style.overflow = 'auto';
}

closeModalBtn.addEventListener('click', function () {
  closeModal();
});

document.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) {
    closeModal();
  }
});

var alertSpan = document.querySelector('.form__field > span');
var consultationForm = document.querySelector('.consultation__form > form');
var alertSpanConsult = document.querySelector('.consultation__form > form > span');

function alertPhone(e, message, classname) {
  if (phoneFieldModal.value.length < 16) {
    message.classList.add(classname);
    e.preventDefault();
  }
}

form.addEventListener('submit', function (e) {
  localStorage.setItem('name', nameFieldModal.value);
  localStorage.setItem('phone', phoneFieldModal.value);
  localStorage.setItem('text', textFieldModal.value);
  alertPhone(e, alertSpan, 'form__field--alert');
});

consultationForm.addEventListener('submit', function (e) {
  alertPhone(e, alertSpanConsult, 'reveal');
});

var navToggle = document.querySelector('.nav__toggle');
var contactsToggle = document.querySelector('.contacts__toggle');
var navList = document.querySelector('.nav__list');
var contactsList = document.querySelector('.contacts__list');

function showAccordion(button, list, button2, list2) {
  button.addEventListener('click', function () {
    if (button.classList.contains('accordion__toggle--opened')) {
      button.classList.remove('accordion__toggle--opened');
      list.classList.add('mobile-hidden');
      list2.classList.remove('mobile-hidden');
    } else {
      button.classList.add('accordion__toggle--opened');
      list.classList.remove('visually-hidden');
      button2.classList.remove('accordion__toggle--opened');
      list2.classList.add('mobile-hidden');
      list.classList.remove('mobile-hidden');
    }
  });
}

showAccordion(navToggle, navList, contactsToggle, contactsList);
showAccordion(contactsToggle, contactsList, navToggle, navList);

/*eslint-disable*/
var input = document.querySelector('#phone-form');
var inputModal = document.querySelector('#phone-modal');

var maskOptions = {
  mask: '+{7}(000)000-00-00'
};

IMask(input, maskOptions);
IMask(inputModal, maskOptions);
