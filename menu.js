$(document).ready(function() {
	
$('.topbar h3 a').click(function(e) {
		$('#frame').hide();
		$('#content').show();
		$('div.topbar li').removeClass('active');
		$$('div.topbar li:first').addClass('active');
});	
$('.topbar li').not('li#link_bugtracker').click(function(e) {
		$('#frame').hide();
		$('#content').show();
		$('div.topbar li').removeClass('active');
		$(this).addClass('active');
});
$('li#link_bugtracker').click(function(e) {
		$('#iframe').attr('src', 'http://mageia-app-db.tuxette.fr/projects/mageia-app-db/issues');
		$('#frame').show();
		$('#content').hide();
		$('div.topbar li').removeClass('active');
		$(this).addClass('active');

		e.preventDefault();
	});
$('li#link_wiki').click(function(e) {
		$('#iframe').attr('src', 'http://mageia-app-db.tuxette.fr/projects/mageia-app-db/wiki');
		$('#frame').show();
		$('#content').hide();
		e.preventDefault();
	});
$('li#link_ci').click(function(e) {
		$('#iframe').attr('src', 'http://hudson.zone-ttp.com');
		$('#frame').show();
		$('#content').hide();
		e.preventDefault();
	});

});
