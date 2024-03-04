const form = document.querySelector('.form');

// Навешиваем на форму обработчик отправки
form.onsubmit = function(evt) {
    console.log('test')
    evt.preventDefault();

    //window['ym'](96649585,'reachGoal','data from the form');
};
