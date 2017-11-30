function prepareGallery(){
   if(!document.getElementsByTagName) return false;
   if(!document.getElementById) return false;
   if(!document.gerElementById("imagegallery")) return false;                           
 //check getElementsByTage and getElementById methods 
 var gallery = document.getElementById("imagegallery");
 var links = gallery.getElementsByTagName("a");
 for (var i = 0; i < links.length; i++){
    
  links[i].onclick = function(){
   return showPic(this) ? false:true;
   }
  }
 }
function showPic(whichpic) { 
   if(!document.getElementById("placeholder")) return false;
            var source = whichpic.getAttribute("href");
            var placeholder = document.getElementById("placeholder");
   if(palceholder.nodeName != "IMG") return false;
            placeholder.setAttribute("src", source);
   if(document.getElementById("description")){
            var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title"): "";
            var description = document.getElementById("description");
      if(description.firstChild.nodeType == 3){
            description.firstChild.nodeValue = text;
        }
      }
   return true;
   }
