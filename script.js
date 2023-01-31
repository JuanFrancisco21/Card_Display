$('.option').click(function () {
  $('.option').removeClass('active');
  $(this).addClass('active');
});
function myFunction() {
  var element = document.body;
  element.classList.toggle('dark-mode');
}
function navigate(elem) {
  switch (elem.id) {
    case 'portfolio':
      window.location.href =
        'https://juanfrancisco21.github.io/portfolio/';
      break;
    case 'kaze':
      window.location.href =
        'https://juanfrancisco21.github.io/K-A-Z-E/';
      break;
    case 'cofradia':
      window.location.href =
        'https://juanfrancisco21.github.io/Cofradia/';
      break;
    case 'github':
      window.location.href =
        'https://github.com/JuanFrancisco21';
      break;
    case 'linkedin':
      window.location.href =
        'http://www.linkedin.com/in/juan-fco-aguilar-sanchez/';
      break;

    default:
      window.location.href =
        'http://www.linkedin.com/in/juan-fco-aguilar-sanchez/';
      break;
  }
}
