$( document ).ready(function(){
	$(".button-collapse").sideNav();
    $('.scrollspy').scrollSpy({
        scrollOffset: 0
    });

    $('.grid').masonry({
		itemSelector: '.grid-item',
		percentPosition: true,
		gutter: 10
	});

    var feed = new Instafeed({
            get: 'tagged',
            tagName: 'awesome',
            clientId: 'ana_carol_plima'
        });
        feed.run();
})