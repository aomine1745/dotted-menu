window.onload = function(){
	const dotted  = document.querySelector('.dotted ');
	dotted .addEventListener('click', active);
	function active(){
		this.classList.toggle('active')
	}
}