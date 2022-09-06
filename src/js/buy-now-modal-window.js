(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-buy-now-modal-open]'),
    openMobileModalBtn: document.querySelector('[data-mobile-buy-now-modal-open]'),
    closeModalBtn: document.querySelector('[data-buy-now-modal-close]'),
    modalItems: document.querySelectorAll('[data-modal-item]'),
    modal: document.querySelector('[data-buy-now-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openMobileModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modalItems.forEach(item => {
    item.addEventListener('click', toggleModal);
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-buy-now-modal-open]'),
//     closeModalBtn: document.querySelector('[data-buy-now-modal-close]'),
//     modalItems: document.querySelectorAll('[data-modal-item]'),
//     modal: document.querySelector('[data-buy-now-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);
//   refs.modalItems.forEach(item => {
//     item.addEventListener('click', toggleModal);
//   });

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();
