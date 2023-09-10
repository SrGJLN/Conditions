const check = document.querySelector('.check');
const resulsticker = document.getElementById('resulsticker');


check.addEventListener('click', () => {
    const num1 = document.getElementById('plate_1').value;
    const num2 = document.getElementById('plate_2').value;
    const num3 = document.getElementById('plate_3').value;

    const total = parseInt(num1) + parseInt(num2) + parseInt(num3);
    console.log(total);

if (total > 10) {
    resulsticker.innerHTML = 'Llevas demasiados stickers';
    resulsticker.style.color='red';
} else {
    resulsticker.innerHTML = '  Llevas ' + total;
    resulsticker.style.color='green';
}
})
