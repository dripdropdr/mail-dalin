// $('textarea').click(function() {
//     $(this).parent().next('textarea').val(function(idx, value){
//         return value.replace(/(^|\n)([^\u2022])/u, '$1\u2022 $2');
//     });
//     return false;
// });

$(document).on("click", 'ul.tabs li', function(){
	var tab_id = $(this).attr('data-tab');

	$('ul.tabs li').removeClass('current');
	$('.tab-content').removeClass('current');
	$('.preview').removeClass('current');

	$(this).addClass('current');
	$("#"+tab_id).addClass('current');
	$('.preview').addClass('current');
})
