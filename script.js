const form = document.querySelector('.form');

// Навешиваем на форму обработчик отправки
form.onsubmit = function(evt) {
    console.log('test')
    evt.preventDefault();

    //window['ym'](96649585,'reachGoal','data from the form');



    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/posts/1",
        dataType: "html",
        data: data,
        success: function (out) {
            console.log(out)
        }
    });
};
