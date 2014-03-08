$(document).ready(function(){
	
	// init render all
	var template = Handlebars.compile($('#products-data').html());

	for(var i = 0; i < productsData.productsList.length; i++){
		$('#product-container').append(template(productsData.productsList[i]));
	}

	/**
	 * handler for add to wish list
	 * @return {undefined}
	 */
	$(document).on('click', '.wishit', function(){
		var targetTitle = $(this).siblings('.product-title').html();
		var targetObj = productsData.productsList.filter(function(item){
			return targetTitle === item.title;
		});

		var template = Handlebars.compile($('#wish-list-data').html());
		$('#wish-list').append(template(targetObj[0]));
	})

	$(document).on('click', '.wish-remove', function(){
		$(this).closest('li').remove();
	});
});