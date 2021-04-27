
$(function(){

    $('#zutaten').on('click', 'li' , function(){
           
                var zutat= $(this).text();
                var eingabe=$('<li class="zuList"></li>').text(zutat).on('click',function(){
                    $(this).remove();
                });

            $('#myPizza').append(eingabe);
    });

    $('#remove').on('click', ()=>{
        $('#myPizza').empty();
    });
});
  