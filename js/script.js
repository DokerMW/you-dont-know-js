const books = document.querySelector('.books');
const book = document.querySelectorAll('.book');
const body = document.querySelector('body');
const bookTitleLinks = document.querySelectorAll('.book h2 a');
const adv = document.querySelector('.adv');
const bookList = document.querySelectorAll('ul');
const chaptersBookTwo = bookList[0].querySelectorAll('li');
const chaptersBookFive = bookList[5].querySelectorAll('li');
const chaptersBookSix = bookList[2].querySelectorAll('li');
const newChapter = document.createElement('li');

books.append(book[1])
books.append(book[0])
books.append(book[4])
books.append(book[3])
books.append(book[5])
books.append(book[2])

body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

bookTitleLinks[4].innerHTML = 'Книга 3. this и <strong>Прототипы</strong> Объектов';

adv.remove();


chaptersBookTwo[9].after(chaptersBookTwo[2]);
chaptersBookTwo[8].after(chaptersBookTwo[7]);
chaptersBookTwo[3].after(chaptersBookTwo[6]);
chaptersBookTwo[6].after(chaptersBookTwo[8]);


chaptersBookFive[1].after(chaptersBookFive[9]);
chaptersBookFive[4].after(chaptersBookFive[2]);
chaptersBookFive[7].after(chaptersBookFive[5]);

newChapter.textContent = 'Глава 8: За пределами ES6';
newChapter.classList.add('chapter');

chaptersBookSix[8].after(newChapter);