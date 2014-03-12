$(function(){

  $('textarea').keyup(function(e) {
    if ($('textarea').val().split('').indexOf('>') !==-1 || $('textarea').val().split('').indexOf('<') !==-1) {
      alert("You are not allowed to use the > < symbols");
      $('#comment').val('');
      e.preventDefault();
    }
  });

  $('#name').keyup(function(e) {
    if($('#name').val().split('').indexOf('>') !==-1 || $('#name').val().split('').indexOf('<') !==-1){
      alert("You are not allowed to use the > < symbols.");
      $('#name').val('');
      e.preventDefault();
    }
  });

    $('#email').keyup(function(e) {
       if($('#email').val().split('').indexOf('>') !==-1 || $('#email').val().split('').indexOf('<') !==-1){
         alert("You are not allowed to use the > < symbols.");
         $('#email').val('');
         e.preventDefault();
    }
  });

  // lame validation
  $('#submit').click(function(e){

    if($('#name').val().trim() == "" || $('#email').val().trim() == ""){
      alert("You must enter your name and email.");
      e.preventDefault();
    }

    var fixComment = $('textarea').val();
    fixComment = fixComment.replace('&','&amp').replace('"','&quot').replace("'",'&rsquo').replace("'",'&lsquo');

    var fixName = $('#name').val();
    fixName = fixName.replace('&','&amp').replace('"','&quot').replace("'",'&rsquo').replace("'",'&lsquo');
    $('#name').val(fixName);

  });

});