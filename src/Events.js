/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const btn = document.createElement('button');
    btn.textContent = 'Удали меня';

    btn.onclick = function (event) {
        event.target.remove();
    };

    document.body.append(btn);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const list = document.createElement('ul');
    for (const item of arr) {
        const point = document.createElement('li');
        point.textContent = item;
        point.onmouseover = function (event) {
            event.target.setAttribute('title', event.target.textContent);
        };
        list.append(point);
    }

    document.body.append(list);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const link = document.createElement('a');
    link.setAttribute('href', 'https://tensor.ru/');
    link.textContent = 'tensor';

    link.addEventListener(
        'click',
        (event) => {
            event.target.textContent += ' ' + event.target.href;
            event.preventDefault();
        },
        { once: true },
    );
    document.body.append(link);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    function addNewListPoint(list) {
        const point = document.createElement('li');
        point.textContent = 'Пункт';
        point.onclick = function (event) {
            event.target.textContent += '!';
        };
        list.append(point);
    }

    const list = document.createElement('ul');
    addNewListPoint(list);

    const btn = document.createElement('button');
    btn.textContent = 'Добавить пункт';
    btn.onclick = function (event) {
        addNewListPoint(list);
    };

    document.body.append(list);
    document.body.append(btn);
}
