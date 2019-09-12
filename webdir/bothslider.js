
/* exactly the same code as before - onlydifference is we added PEP
   to make our much cleaner pointer events example work for mouse and touch
   even in non-pointer-events browsers - clean, future-proof code polyfilled
   for old and current browsers; compare this to the mouse+touch monstrosity... */

var t = document.querySelector(".custom-slider-button");

t.addEventListener('pointerdown', sliderdown, true);
t.addEventListener('pointermove', slidermove, true);
t.addEventListener('pointerup', sliderup, true);


function sliderdown(e) {
	var t = e.target;
	t.setPointerCapture(e.pointerId);
	t.classList.add("active");
}

function sliderup(e) {
  var t = e.target;
	t.classList.remove("active");
}

function slidermove(e) {
  var t = e.target;

  if ((t.hasPointerCapture && t.hasPointerCapture(e.pointerId)) || t.classList.contains('active')) {
  	var newpos = e.clientX - t.parentElement.offsetLeft - (t.offsetWidth/2);
	  if (newpos < 0) {
		  newpos = 0;
	  } else if ( newpos > (t.parentElement.offsetWidth - t.offsetWidth)) {
		  newpos = t.parentElement.offsetWidth - t.offsetWidth;
	  }
	  t.style.left = newpos +'px';
  }
}