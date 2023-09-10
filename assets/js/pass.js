
const resulpass = document.getElementById('resulpass');
const prove = document.querySelector('.prove');


prove.addEventListener('click', () =>{

const first = document.getElementById('first').value;
const second = document.getElementById('second').value;
const third = document.getElementById('third').value;

if(first == 9 && second == 1 && third == 1){
      resulpass.innerHTML = 'Password 1 correcto';
      resulpass.style.color='white';
}else if (first == 7 && second == 1 && third == 4){
      resulpass.innerHTML = 'Password 2 correcto';
      resulpass.style.color='white';
}else{
      resulpass.innerHTML = 'Password incorrecto';
      resulpass.style.color='red';
}
})
