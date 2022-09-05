(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menuItems: document.querySelectorAll('[data-menu-item]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  refs.menuItems.forEach((item) => {
    item.addEventListener('click', toggleModal);
  });

  function toggleModal() {
   refs.menu.classList.toggle('is-open');
  }
})();
