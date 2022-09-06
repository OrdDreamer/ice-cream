(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-contacts-ourlocations-modal-open]'),
    closeModalBtn: document.querySelector('[data-contacts-ourlocations-modal-close]'),
    modal: document.querySelector('[data-contacts-ourlocations-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
