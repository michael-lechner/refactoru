$(function(){

    $('.load-countries').on('click', function(){
        $.get('/countries', function(data){

            var countryList = $('.country-list');

            countryList.html('');

            for(var i = 0; i < data.length; i++){
                if(data[i].hasTravelled){
                    countryList.append('<li> ' + data[i].name + '</span><span class="travelled text-muted checked">&#x2713;</span>');
                }else{
                    countryList.append('<li> ' + data[i].name);                    
                }
            }   
        });
    });

    $('.search-countries').on('click', function(e){
        e.preventDefault();
        var searchBar = $(this).closest('.search-module').find('.search-name');

        $.get('/search/' + searchBar.val(), function(data){

            if(data.length > 0){
                var searchList = $('.search-list');

                for(var i = 0; i < data.length; i++){
                    if(data[i].hasTravelled){
                        $(searchList).append('<li> <span class="name">' + data[i].name + '</span><span class="travelled text-muted checked">&#x2713;</span>');
                    }else{
                        $(searchList).append('<li> <span class="name">' + data[i].name + '</span><span class="travelled text-muted">&#x2713;</span>');     
                    }
                }
            }else{
                console.log('hi');
                searchBar.closest('.form-group').addClass('has-error');
                searchBar.val('');
                searchBar.attr('placeholder', 'Please enter an existing country name');
            }
        });
    });


    $(document).on('click', '.travelled', function(){
        if($(this).hasClass('checked')){
            $(this).removeClass('checked');
            $.get('/update/' + $(this).prev().html() + '/remove', function(data){
                console.log(data);
            });
        }else{
            $(this).addClass('checked');
            $.get('/update/' + $(this).prev().html(), function(data){
                console.log(data);
            });
        }
    });

});