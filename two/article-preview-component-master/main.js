let person = document.querySelector('.content .person');
let share = document.querySelector('.content .share');
let shareIcon = document.querySelectorAll('.sh');
shareIcon.forEach((icon) => {
    icon.addEventListener('click', () => {
        person.classList.toggle('hide');
        share.classList.toggle('hide');
    });
});
