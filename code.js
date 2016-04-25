$(document).ready(function(){
	$('#boton_append_1').click(function() {
		$('.elementos1').append("<li>Elemento de prueba</li>");
	});
	$('#boton_append_2').click(function() {
		$('.elementos1').append("<li>Actualidad jQuery</li>");
	});
	$('#boton_append_3').click(function() {
		$('.capa1').append("Texto de prueba con append()<br />");
	});
	$('#boton_append_4').click(function() {
		$('.capa1').append("Actualidad jQuery con append()<br />");
	});
	$('#boton_prepend_1').click(function() {
		$('.elementos1').prepend("<li>Elemento de prueba</li>");
	});
	$('#boton_prepend_2').click(function() {
		$('.elementos1').prepend("<li>Actualidad jQuery</li>");
	});
	$('#boton_prepend_3').click(function() {
		$('.capa1').prepend("Texto de prueba con append()<br />");
	});
	$('#boton_prepend_4').click(function() {
		$('.capa1').prepend("Actualidad jQuery con append()<br />");
	});
});