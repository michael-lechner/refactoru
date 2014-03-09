$(function(){
    $(document).on('click', '.search', function(e){
        e.preventDefault();
        
        $.get('/search', function(data){
            console.log(data);
        });

    });

});