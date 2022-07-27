document.addEventListener("DOMContentLoaded", ()=>{
const sbtn = document.querySelector('#btn');
const modal =  document.querySelector('.modal');

const open = event => {
	event.preventDefault();
	modal.style.display="flex";
	document.addEventListener('keyup', close);
};

const close = event => {
target = event.target;
if(target === modal || target.classList.contains("close") || event.keyCode === 27 ){
	modal.style.display = "";
	document.removeEventListener('keyup', close);
};
};

sbtn.addEventListener('click',open);
modal.addEventListener('click', close);
});
