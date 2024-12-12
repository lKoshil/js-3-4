let paragraph = document.getElementById('text'); //Получение элемента по ID при ошибки null
paragraph.textContent = 'параграф текста'; //Изменение текста элемента при ошибки null

document.getElementById("image").src = "i (6).jpg"; 
document.getElementById('image').alt = "логотип js";

document.addEventListener('DOMContentLoaded', function() { //добавляем обработчик события к объекту document
    const list = document.getElementById('list'); //ищем элемент с индификатором 'list' и сохраняем его в переменную
    const firstElement = list.children[0]; //обращение к первому дочернему элементу списка. children запомнить.
    function addActive() { //добавляет класс 'active' к первому элементу списка
        firstElement.classList.add('active'); //добавляем active к firstElement
    }
    function removeActive() { //удалляет класс active у элементов списка
        //const list = document.getElementById('list'); 
        const elements = list.getElementsByTagName('li');//поучаем все li-элементы в списке
        for (let i=0; i< elements.length; i++) { //цикл
            elements[i].classList.remove('active');//удаляем класс active у элемента в списке
        }  
    }  
    document.getElementById('addActive').addEventListener('click', addActive); // Находим элемент с идентификатором "addActive" и вызываем функцию 
    document.getElementById('removeActive').addEventListener('click', removeActive);


    const textInput = document.getElementById('input');
    const submitButton = document.getElementById('submit');
    function handleButtonClick() { //функция обработки клика по кнопке
        const inputValue = textInput.value;
        console.log(inputValue);
    }
    submitButton.addEventListener('click', handleButtonClick); //обработчик клика по кнопке

    const none = document.getElementById('list-none');
    const items =[
        'нулевой',
        'первый',
        'второй'
    ];//массив
    items.forEach(function(item) { //испл. forEach для итерации по массиву
        const li = document.createElement('li'); //создание
        li.textContent = item; //устанавление текста 
        none.appendChild(li); //добавление li в конец none
    });
});
