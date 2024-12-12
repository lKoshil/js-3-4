document.addEventListener('DOMContentLoaded', function() { 
    const container = document.getElementById('container'); //получаем элемент контейнера
    const firstparagraph = document.createElement('p'); //содание
    firstparagraph.textContent = 'lmao capes';
    container.appendChild(firstparagraph); //заносим содержимое в конец контейнера
    const secondparagraph = document.createElement('p');
    secondparagraph.textContent = 'glasa bolyat';
    container.insertBefore(secondparagraph, firstparagraph);//вставляем второй параграф перед первым

    const cloneButton = document.getElementById('cloneButton'); //получаем элемент с идентификатором 'cloneButton'
    function handleCloneButtonClick() { //функция обработки клика на кнопку
        const clone = cloneButton.cloneNode(true); //клонируем кнопку. true клонирует все элементы включая текстовые узлы
        cloneButton.parentNode.insertBefore(clone, cloneButton.nextSibling); //запомнить
    }
    cloneButton.addEventListener('click',handleCloneButtonClick); //обработчик клика на кнопку

    const template = document.getElementById('itemTemplate'); 
    const itemList = document.getElementById('itemList');
    for (let i=0; i<5; i++) {
        const clone = template.content.cloneNode(true); //клонируем шаблон
        itemList.appendChild(clone); //добавляем клон в список
    }

    const list = document.getElementById('removableList');//получаем список
    const item = list.querySelector('li');// получаем первый пункт списка
    item.querySelector('.remove-button').addEventListener('click', function(){// обработчик клика на кнопку удаления
        item.remove(); //удаление пункта из списка
    });

    const table = document.getElementById('myTable');
    table.addEventListener('click', function(event) {
        const target = event.target;
        if (target.tagName === 'TD') {
            target.classList.add('highlight');
        }// обработчик клика на ячейку таблицы. проверяет, является ли кликнутый элемент ячейкой таблицы и добавляет к ней класс 'highlight'
    })
    table.addEventListener('click' , function(event) {
        const target = event.target;
        if (target.tagName === 'BUTTON') {
            target.closest('td').classList.remove('highlight');
        }
    }); // обработчик клика на кнопку удаления ячейки таблицы. удаляет класс 'highlight' у родительской ячейки кликнутой кнопки
});

