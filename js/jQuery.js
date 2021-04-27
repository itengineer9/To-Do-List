$(function(){

  $('#addLi').click(()=>{
      $('#myul').append(`<div class='liDiv'>
                          <li class='list'>${$('#userInput').val()}</li>
                          <button class='bton'>Remove
                          <i class="fa fa-trash-o" style="font-size:18px;color:red"></i></button>
                          </div>`);
      
      $('#userInput').val('');
  });


  $("#myul").on("click" ,"li", function() {
      $(this).parent().each(function(){
          $(this).fadeOut(1000).remove();
      });
  });
    

  $("#myul").on("click" ,"button", function() {
      $(this).parent().remove();
  });
  
});

$('#card').on('click', 'h2', function(){
      $(this).animate({fontSize :'+=10px'});
});