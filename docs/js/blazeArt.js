window.addEventListener('load', () => {
  for(const el of document.getElementsByClassName('scroll-to-first-ba')) {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementsByClassName(`chara-DF-${this.dataset.df}`)[0].scrollIntoView();
    });
  }
});