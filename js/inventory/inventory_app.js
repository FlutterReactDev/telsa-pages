function update_catalogue() {
	var array_values = [];
	
	var get_params = $('form.form-desktop').serialize();

	$('.checkbox-body-color').each( function() {
	    if( $(this).is(':checked') ) {
	        array_values.push( $(this).val() );
	    	get_params += '&filter[body_color][]='+$(this).val()
	    }
	});

	$('.checkbox-interior-color').each( function() {
	    if( $(this).is(':checked') ) {
	        array_values.push( $(this).val() );
	    	get_params += '&filter[interior_color][]='+$(this).val()
	    }
	});
	
	// Now you can store your values in a comma separated list
	$.ajax('/getcars?'+get_params, 
	{
	    // dataType: 'json', // type of response data
	    // timeout: 500,     // timeout milliseconds
	    success: function (data,status,xhr) {
	    	$('.tds-loader').removeClass('tds-loader--show');
	    	$('.results-container ').html(data);

	    	$('body .result-photos-arrow--previous').on('click', function(e) {
				var previous = $(this).closest('.result-photos-main').children('ul').children('li.result-photos-slide--active').prev();
				if(previous.length == 0) {
					previous = $(this).closest('.result-photos-main').children('ul').children('li').last();
				}
				$(this).closest('.result-photos-main').children('ul').children('li.result-photos-slide--active').removeClass('result-photos-slide--active');
				previous.addClass('result-photos-slide--active');
			});

			$('body .result-photos-arrow--next').on('click', function(e) {
				var next = $(this).closest('.result-photos-main').children('ul').children('li.result-photos-slide--active').next();
				if(next.length == 0) {
					next = $(this).closest('.result-photos-main').children('ul').children('li').first();
				}
				$(this).closest('.result-photos-main').children('ul').children('li.result-photos-slide--active').removeClass('result-photos-slide--active');
				next.addClass('result-photos-slide--active');
			});
	    },
	    error: function (jqXhr, textStatus, errorMessage) {
	    }
	});
}

update_catalogue();

$('form input').on('change', function() {
	update_catalogue();
})