
var firstArticle = document.querySelector('.article1');
var secondArticle = document.querySelector('.article2');

var nextButton = document.querySelector('.next');
var prevButton = document.querySelector('.prev');

console.log(firstArticle);
console.log(secondArticle);
console.log(nextButton);
console.log(prevButton);

firstArticle.style.display = 'flex';

var allArticles = document.querySelectorAll('.banner article > div');

console.log(allArticles);
var counter = 0;
var maxCounter = allArticles.length;
console.log(maxCounter);

nextButton.addEventListener('click',function () {
    allArticles[counter].style.display = 'none';
    counter += 1;
    if (counter > (maxCounter - 1)) {
        counter = 0;

    }
    allArticles[counter].style.display = 'flex';
});

prevButton.addEventListener('click',function () {
    allArticles[counter].style.display = 'none';
    counter -= 1;
    if (counter < 0) {
        counter = (maxCounter-1);
    }
    allArticles[counter].style.display = 'flex';
});

