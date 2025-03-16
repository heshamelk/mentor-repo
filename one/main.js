let contentState = document.querySelector('.content.state');
let contentActive = document.querySelector('.content.active');
let stateBullets = Array.from(document.querySelectorAll('.content ul li'));
let submitBtn = document.querySelector('.content .submit');
let chosen = document.querySelector('.content .chose span');

stateBullets.forEach((bullet) => {
    bullet.addEventListener('click', (e) => {
        e.target.classList.toggle('clicked');
        chosen.innerHTML = e.target.textContent; 
    });
});

submitBtn.addEventListener('click', () => {
    contentState.style.display = 'none';
    contentActive.style.display = 'block';
});


