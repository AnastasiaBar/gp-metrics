const form = document.querySelector('.form');

// Навешиваем на форму обработчик отправки
form.onsubmit = function(evt) {
    console.log('test')
    evt.preventDefault();
};
