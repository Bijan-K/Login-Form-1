const slidePage = document.querySelector('.slide-page');
const nextBtn = document.querySelectorAll('.next');
const prevBtn = document.querySelectorAll('.previous');
const submitBtn = document.querySelector('.submit');
const progressText = document.querySelectorAll('.step p');
const progressCheck = document.querySelectorAll('.step .check');
const progressBullet = document.querySelectorAll('.step .bullet');
let current = 1;
let current2 = 4;
nextBtn.forEach(function (next, index) {
  next.addEventListener('click', function () {
    progressBullet[current2 - 1].classList.add('active');
    progressCheck[current2 - 1].classList.add('active');
    progressText[current2 - 1].classList.add('active');
    current2--;
    current++;
    if (current == 2) {
      slidePage.style.marginRight = '-20%';
    } else if (current == 3) {
      slidePage.style.marginRight = '-40%';
    } else if (current == 4) {
      slidePage.style.marginRight = '-60%';
    }
  });
});

prevBtn.forEach(function (prev, index) {
  prev.addEventListener('click', function () {
    current--;
    current2++;
    progressBullet[current2 - 1].classList.remove('active');
    progressCheck[current2 - 1].classList.remove('active');
    progressText[current2 - 1].classList.remove('active');
    console.log(current);
    if (current == 1) {
      slidePage.style.marginRight = '0%';
    } else if (current == 2) {
      slidePage.style.marginRight = '-20%';
    } else if (current == 3) {
      slidePage.style.marginRight = '-40%';
    } else if (current == 4) {
      slidePage.style.marginRight = '-60%';
    }
  });
});

submitBtn.addEventListener('click', function () {
  progressBullet[current2 - 1].classList.add('active');
  progressCheck[current2 - 1].classList.add('active');
  progressText[current2 - 1].classList.add('active');
  slidePage.style.marginRight = '-80%';
});
