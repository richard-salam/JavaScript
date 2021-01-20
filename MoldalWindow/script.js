'use strict';

//Creating variables for the class selections
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnsCloseModal = document.querySelectorAll('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

//Opening the Modal by clicking on the Modal buttons
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

//Function to hide the modal window
const hideModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//Closing the Modal by clicking on the close buttons
for (let i = 0; i < btnsCloseModal.length; i++) {
  btnsCloseModal[i].addEventListener('click', hideModal); // We should not use function call here i.e hideModal() , Just mention the function name.
}

//Closing the Modal by clicking on the overlay
overlay.addEventListener('click', hideModal);

// To close the model using keyboard
// Since keyboard press is affecting the whole document
// Its called a global event

document.addEventListener('keydown', function (e) {
  // 'e' (or the object which is passed to the event listener function) is the object created by JS engin by default when an event takes place with information regarding that event.
  //   console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    hideModal();
  }
});
