// Получаем элементы со страницы
const countryHeader = document.getElementById('country-header');
const countrySelected = document.getElementById('country-selected');
const countryDetected = document.getElementById('country-detected');
const yesButton = document.getElementById('country-yes');
const noButton = document.getElementById('country-no');
const countryChoose = document.getElementById('country-choose');
const inputSearch = document.getElementById('search-country__input');
const countryItem = document.querySelectorAll('.country-list__item');
const closeDropdown = document.querySelectorAll('.close-dropdown');


// Открываем первый .country-detected
countryHeader.addEventListener('click', () => {
	countryDetected.classList.add('is-active');
});

// Обработчик клика по кнопке "Yes" убирает класс is-active у первого попапа
yesButton.addEventListener('click', () => {
  countryDetected.classList.remove('is-active');
});

// Обработчик клика по кнопке "No" закрывает первый попап и открывает второй
noButton.addEventListener('click', () => {
  countryDetected.classList.remove('is-active');
  countryChoose.classList.add('is-active');
});

// Обработчик клика по документу закрывает 1 попап, если клик был вне его области
document.addEventListener('click', function(event) {
  if (!countryDetected.contains(event.target) && !countryHeader.contains(event.target)) {
    countryDetected.classList.remove('is-active');
  }
});

// Обработчик клика по документу закрывает 2 попап, если клик был вне его области
document.addEventListener('click', function(event) {
  if (!countryChoose.contains(event.target) && !noButton.contains(event.target)) {
    countryChoose.classList.remove('is-active');
  }
});


// Закрытие поппапов по кнопке Close
closeDropdown.forEach(button => {
  button.addEventListener('click', function() {
    countryChoose.classList.remove('is-active');
  });
});

// При клике на страну в модалке закрываем поппап и выводим ее в шапку
countryItem.forEach((country) => {
  country.addEventListener('click', () => {
    // Заносим текст из li в div
    countrySelected.innerText = country.innerText;
    // Закрываем модалку
    countryChoose.classList.remove('is-active');

		// язык выбранной страны через data
		const selectedLanguage = country.dataset.lang; 

		// перезагрузить страницу с выбранным языком
    location.replace(`https://mayagemstones.ru/${selectedLanguage}`);
  });
});


/* ------------------- Вид окна выбора страны на мобилках -------------------- */

// проверяем ширину экрана при загрузке и изменении размера окна
window.addEventListener('resize', function() {
  const width = window.innerWidth;
  
  // если ширина менее 480px
  if (width <= 480) {
    // убираем прокрутку страницы
    document.body.style.overflow = 'hidden';
  }
  else {
    // включаем прокрутку страницы
    document.body.style.overflow = 'visible';
  }
});
