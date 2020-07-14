'use strict';

{
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
    const Omikuji = Math.random();

        if (Omikuji < 0.1) {
            btn.textContent = '大吉';
        } else if (Omikuji < 0.2) {
            btn.textContent = '中吉';
        } else if (Omikuji < 0.3) {
            btn.textContent = '小吉';
        } else {
            btn.textContent = '凶';
        }
    });

}
