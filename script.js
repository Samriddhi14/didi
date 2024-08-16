function showMessage() {
    const messageDiv = document.getElementById('message');
    messageDiv.classList.toggle('hidden');
}

function lightsOn() {
    document.body.classList.add('lights-on');
    document.getElementById('birthday-song').play();
    startConfetti();
    showGrowingRose();
}

function startConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    confettiContainer.classList.remove('hidden');

    for (let i = 0; i < 300; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = `${Math.random() * 100}vh`;
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.width = `${Math.random() * 8 + 5}px`;
        confetti.style.height = `${Math.random() * 15 + 5}px`;
        confetti.style.opacity = Math.random() + 0.5;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.animationDelay = `${Math.random() * 0.5}s`;
        confettiContainer.appendChild(confetti);
    }
}

function getRandomColor() {
    const colors = ['#ff0a54', '#ff477e', '#ff85a1', '#fbb1bd', '#ffccd5', '#ff7f3f', '#f77f00', '#ffbc42'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function showGrowingRose() {
    const rose = document.createElement('div');
    rose.classList.add('growing-rose');
    document.querySelector('.content').appendChild(rose);
}
