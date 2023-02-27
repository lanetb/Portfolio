const aboutMe = document.querySelector('.aboutMe');
const aboutMeHead = document.querySelector('.aboutMeHead');
const aboutMeText = document.querySelector('.aboutMeText');
const work = document.querySelector('.work');
const workHead = document.querySelector('.workHead');
const workText = document.querySelector('.workText');
const school = document.querySelector('.school');
const schoolHead = document.querySelector('.schoolHead');
const schoolText = document.querySelector('.schoolText');
const bottom = document.querySelector('.bottom');

aboutMe.addEventListener('click', function() {
    aboutMe.classList.add('active');
    work.classList.remove('active');
    school.classList.remove('active');
    aboutMeHead.classList.remove('hidden');
    aboutMeText.classList.remove('hidden');
    workHead.classList.add('hidden');
    workText.classList.add('hidden');
    schoolHead.classList.add('hidden');
    schoolText.classList.add('hidden');
    bottom.classList.add('left');
    bottom.classList.remove('right');
});

work.addEventListener('click', function() {
    aboutMe.classList.remove('active');
    work.classList.add('active');
    school.classList.remove('active');
    aboutMeHead.classList.add('hidden');
    aboutMeText.classList.add('hidden');
    workHead.classList.remove('hidden');
    workText.classList.remove('hidden');
    schoolHead.classList.add('hidden');
    schoolText.classList.add('hidden');
    bottom.classList.remove('left');
    bottom.classList.remove('right');

});

school.addEventListener('click', function() {
    aboutMe.classList.remove('active');
    work.classList.remove('active');
    school.classList.add('active');
    aboutMeHead.classList.add('hidden');
    aboutMeText.classList.add('hidden');
    workHead.classList.add('hidden');
    workText.classList.add('hidden');
    schoolHead.classList.remove('hidden');
    schoolText.classList.remove('hidden');
    bottom.classList.add('right');
    bottom.classList.remove('left');
});
