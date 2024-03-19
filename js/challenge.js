document.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    let counting = true;
    const counterElement = document.getElementById('counter');
    const timer = setInterval(() => {
        if (counting) {
            counterElement.textContent = ++count;
        }
    }, 1000);
    document.getElementById('plus').addEventListener('click', () => {
        counterElement.textContent = ++count;
    });
    document.getElementById('minus').addEventListener('click', () => {
        counterElement.textContent = --count;
    });
    document.getElementById('heart').addEventListener('click', () => {
        const likes = document.querySelector('.likes');
        let li = likes.querySelector(`[data-count="${count}"]`);
        if (!li) {
            li = document.createElement('li');
            li.dataset.count = count;
            li.innerHTML = `${count} has been liked <span>1</span> time`;
            likes.appendChild(li);
        } else {
            const span = li.querySelector('span');
            let likesCount = parseInt(span.textContent);
            span.textContent = ++likesCount;
            li.innerHTML = `${count} has been liked <span>${likesCount}</span> times`;
        }
    });
    const pauseButton = document.getElementById('pause');
    pauseButton.addEventListener('click', () => {
        counting = !counting;
        pauseButton.textContent = counting ? 'pause' : 'resume';
        document.getElementById('plus').disabled = !counting;
        document.getElementById('minus').disabled = !counting;
        document.getElementById('heart').disabled = !counting;
    });
    document.getElementById('comment-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const commentInput = document.getElementById('comment-input');
        const comment = commentInput.value;
        const list = document.getElementById('list');
        const p = document.createElement('p');
        p.textContent = comment;
        list.appendChild(p);
        commentInput.value = '';
    });
});
