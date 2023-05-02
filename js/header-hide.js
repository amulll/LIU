const header = document.querySelector('web-header');
const headerInitialHeight = header.offsetHeight;
let lastScrollPosition = 0;

window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100 && scrollPosition > lastScrollPosition) { // 向下滾動
    header.style.opacity = '0';;
  } else { // 向上滾動
    header.style.opacity = '1';;
  }

  lastScrollPosition = scrollPosition;
});
