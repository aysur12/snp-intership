const toursLinks = document.querySelectorAll('.tours__link');
const activeToursLink = 'tours__link_active';

toursLinks.forEach((toursLink) => {
  toursLink.addEventListener('click', (event) => {
    event.preventDefault();

    toursLinks.forEach((link) => {
      link.classList.remove(`${activeToursLink}`);
    });
    toursLink.classList.add(`${activeToursLink}`);
  });
});
