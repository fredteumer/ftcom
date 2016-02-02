//javascript and jquery fun

$(document).ready();
  
function homeLoad(){
  var note="\n      <div id=\"note\">tech, business, software, gaming." +
    " nintendo hard.\n      </div>\n    ";
  if($('#content').html() == note){}
  else{
    $('#content').fadeOut(function() {
      $(this).html(note)
    }).fadeIn();
  }
}

function aboutLoad(){
  var about="<div id=\"about\">hi, my name is fred teumer and </div>";
  if($('#content').html() == about){}
  else{
    $('#content').fadeOut(function() {
      $(this).html(about)
    }).fadeIn();
  }
}

function contactLoad(){
  var contact="<div id=\"contact_content\">contact me via email fredteumer@gmail.com</div>";
  if($('#content').html() == contact){}
  else{
    $('#content').fadeOut(function() {
      $(this).html(contact)
    }).fadeIn();
  }
}

