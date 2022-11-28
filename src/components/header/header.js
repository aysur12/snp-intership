window.onscroll = () => {
  const header = document.querySelector('.header');
  const menuItems = document.querySelectorAll('.menu__item');
  const menuLinks = document.querySelectorAll('.menu__link');
  const telLink = document.querySelector('.tel__link');
  const logoSvgPaths = document.querySelectorAll('.logo__svg-path');
  const scrollYCount = window.scrollY;

  if (scrollYCount > 450) {
    header.classList.add('header_fixed');
    menuItems.forEach((menuItem) => {
      menuItem.classList.add('menu__item_fixed');
    });
    menuLinks.forEach((menuLink) => {
      menuLink.classList.add('menu__link_fixed');
    });
    telLink.classList.add('tel__link_fixed');
    logoSvgPaths.forEach((logoSvgPath) => {
      logoSvgPath.classList.add('logo__svg-path_fixed');
    });
  } else if (scrollYCount < 450) {
    header.classList.remove('header_fixed');
    menuItems.forEach((menuItem) => {
      menuItem.classList.remove('menu__item_fixed');
    });
    menuLinks.forEach((menuLink) => {
      menuLink.classList.remove('menu__link_fixed');
    });
    telLink.classList.remove('tel__link_fixed');
    logoSvgPaths.forEach((logoSvgPath) => {
      logoSvgPath.classList.remove('logo__svg-path_fixed');
    });
  }
};
