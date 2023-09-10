const flag = document.getElementById('flag');

flag.addEventListener('click', () =>{
    if(flag.style.border==''){
        flag.innerHTML = flag.style.border='2px solid red';
    }else{
        flag.style.border='';
    }
})




