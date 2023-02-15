/**
 * Remove or add the css class to show the card under the mouse
 */
$('.option').on('click', function () {
  $('.option').removeClass('active');
  $(this).addClass('active');
});

$('.option').on('mouseenter', function () {
  $('.option').removeClass('active');
  $(this).addClass('active');
});

$('.option_header').on('click', function () {
  $('.option_header').removeClass('active');
  $(this).addClass('active');
});

$('.option_header').on('mouseenter', function () {
  $('.option_header').removeClass('active');
  $(this).addClass('active');
});


/**
 * Funtion to change website theme, used at the same time to change the background video.
 */
function changetheme() {
  var element = document.body;
  element.classList.toggle('dark-mode');
}

/**
 * Switch for navigate to the clicked card
 * @param {*} elem wich one of the cards selected you want to navigate
 */
async function navigate(elem) {
  if ( document.getElementById('iframe').classList.contains('iframe_show') ) {
    hideiframe();      
  }
  switch (elem.id) {
    case 'portfolio':
      document.getElementById('iframe').src =
        'https://juanfrancisco21.github.io/Portfolio/';
      break;
    case 'kaze':
      document.getElementById('iframe').src =
        'https://juanfrancisco21.github.io/K-A-Z-E/';
      break;
    case 'cofradia':
      document.getElementById('iframe').src =
        'https://juanfrancisco21.github.io/Cofradia/';
      break;
    case 'github':
      document.getElementById('iframe').src =
        'https://github.com/JuanFrancisco21';
      break;
    case 'linkedin':
      document.getElementById('iframe').src =
        'http://www.linkedin.com/in/juan-fco-aguilar-sanchez/';
      break;

    default:
      document.getElementById('iframe').src =
        'http://www.linkedin.com/in/juan-fco-aguilar-sanchez/';
      break;
  }
  async function f1() {
    const x = await resolveAfter2Seconds(10);
    showiframe();
  }

  f1();
}


/**
 * Funciont to switch between two background videos
 */
function changevideo() {
  /*var element = document.getElementById('video_2');

  if (element.classList.contains('hidden')) {
    element.classList.add('visible');
    element.classList.remove('hidden');
  } else {
    element.classList.add('hidden');
    element.classList.remove('visible');
  }*/
}

function hideiframe() {
  var frame = document.getElementById('iframe');
  var header = document.getElementById('header-floating');
  frame.classList.add('iframe_hide');
  frame.classList.remove('iframe_show');
  header.classList.add('float_hide');
  header.classList.remove('float_show');
}

function showiframe() {
  var frame = document.getElementById('iframe');
  var header = document.getElementById('header-floating');
  frame.classList.add('iframe_show');
  frame.classList.remove('iframe_hide');
  header.classList.add('float_show');
  header.classList.remove('float_hide');
}


function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 500);
  });
}
