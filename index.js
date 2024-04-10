function myfunctionFirst() { 
    // get the element
	var div1 = document.getElementsByClassName('temp-slider');

	// set an event listener for it
	div1.addEventListener('click',function(){
		var div2 =  document.createElement('div');
		div2.setAttribute("class", "slider-one");
		this.parentNode.appendChild(div2);
		this.parentNode.removeChild(this);
	});
 } 