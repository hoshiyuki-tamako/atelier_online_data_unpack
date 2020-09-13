if (new MobileDetect(window.navigator.userAgent).mobile()) {
  window.addEventListener('load', function() {
    const button = document.createElement("button");
    button.className = 'material-scrolltop';
    button.type = 'button';
    document.body.appendChild(button);

    $('body').materialScrollTop({
      duration: 0,
      easing: null
    });
  });
}
