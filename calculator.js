
function addToDisplay(input, c) {
    if(input.value == null || input.value == "0")
        input.value = c;
    else
        input.value += c;

}
function sin(form) {
	form.display.value = Math.sin(form.display.value*Math.PI/180);
}
function cos(form) {
	form.display.value = Math.cos(form.display.value*Math.PI/180);
}
function tan(form) {
	form.display.value = Math.tan(form.display.value*Math.PI/180);
}
function equal(form) {
    form.display.value = eval(form.display.value);
}
