//javascript and jquery fun

$(document).ready();

function link(lnk){
  var content="";
  if(lnk=="note"){
    content="\n      <div id=\"note\">tech, business, software, gaming." +
      " nintendo hard.\n      </div>\n    ";
  }
  else if(lnk=="about"){
    content="<div id=\"about_content\"><p id=\"about_content_head\">hi, "+
      "my name is fred teumer and tech is my passion. here's the quick "+
      "and dirty:\n<div class=\"col-md-6\"></div><div class=\"col-md-4\""+ 
      "id=\"about_content_list_container\"><ul id=\"about_content_list\">"+
      "<li>25 years old, living in Charlotte, NC</li>"+
      "<li>Studied Computer Science at Tufts University</li>"+
      "<li>I have worked just about every role in the tech industry: front "+ 
      "end, back end, SysAdmin, NetAdmin, Tier 1 and 2 desktop support, "+ 
      "DevOps</li><li>Favorite game: Resident Evil</ul></div>"+
      "<div class=\"col-md-2\"></div>"+
      "</div>";
  }
  else if(lnk=="contact"){
    content="<div id=\"contact_content\">contact me via email "+
      "fredteumer@gmail.com</div>";
  }
  else{
    console.log("something went wrong in linking. err001");
  }

  if($('#content').html() == content){}
  else{
    $('#content').fadeOut(function() {
      $(this).html(content)
    }).fadeIn();
  }
}  
