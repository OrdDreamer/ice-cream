(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menuItems:document.querySelectorAll("[data-menu-item]"),menu:document.querySelector("[data-menu]")};function t(){e.menu.classList.toggle("is-open")}e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t),e.menuItems.forEach((e=>{e.addEventListener("click",t)}))})();const e=document.querySelectorAll('a[href^="#"]');for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();const o=t.hasAttribute("href")?t.getAttribute("href"):"body";document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})}));(()=>{const e={openModalBtn:document.querySelector("[data-buy-now-modal-open]"),openMobileModalBtn:document.querySelector("[data-mobile-buy-now-modal-open]"),closeModalBtn:document.querySelector("[data-buy-now-modal-close]"),modalItems:document.querySelectorAll("[data-modal-item]"),modal:document.querySelector("[data-buy-now-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.openMobileModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.modalItems.forEach((e=>{e.addEventListener("click",t)}))})(),(()=>{const e={openModalBtn:document.querySelector("[data-about-modal-open]"),closeModalBtn:document.querySelector("[data-about-modal-close]"),modal:document.querySelector("[data-about-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),(()=>{const e={openModalBtn:document.querySelector("[data-contacts-ourlocations-modal-open]"),closeModalBtn:document.querySelector("[data-contacts-ourlocations-modal-close]"),modal:document.querySelector("[data-contacts-ourlocations-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),(()=>{const e={openModalBtn:document.querySelector("[data-contacts-franchise-modal-open]"),closeModalBtn:document.querySelector("[data-contacts-franchise-modal-close]"),modal:document.querySelector("[data-contacts-franchise-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),new Swiper(".customer-reviews-slider",{pagination:{el:".customer-reviews-slider-pagination",clickable:!0},mousewheel:{sensitibity:1},spaceBetween:30});
//# sourceMappingURL=index.b689cc80.js.map
