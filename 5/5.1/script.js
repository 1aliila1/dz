let name = document.getElementById('me');
name.style.background = 'red'
name.style.height = '50px'
name.style.color = 'white'


let head = document.querySelector('.head');
head.style.background = ' black'
alert(head.innerHTML);
head.outerHTML = '<div class = "head" >шапка капка</div>';
let headAf = document.querySelector('.head');
alert(headAf.innerHTML);