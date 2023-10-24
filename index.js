const container = document.querySelector('.cup');
const cups = Array.from(document.querySelector(".cups").children);
console.log(cups);
const totalCups = cups.length;
console.log(totalCups);



for (let i = 0; i < cups.length; i++) {
    // console.log(cups[i]);
    cups[i].addEventListener('click', () => {
        console.log(cups[i]);
        cups[i].classList.add('full');

        if (cups.indexOf(cups[i]) !== 0) {
            if (!(cups[i].previousElementSibling.classList.contains('full'))) {
                let prev = cups[i].previousElementSibling;
                while (prev && !prev.classList.contains('full')) {
                    prev.classList.add('full');
                    prev = prev.previousElementSibling;
                }
            }
        }

        const fullCups = document.querySelectorAll('.cup-small.full').length;
        const percentage = document.getElementById('percentage');
        percentage.style.opacity = 1;
        percentage.style.height = `${(fullCups / totalCups) * 330}px`;
        percentage.innerText = `${(fullCups / totalCups) * 100}%`;
    })
}



