function prepareGallery(){
   if(!document.getElementsByTagName) return false;
   if(!document.getElementById) return false;
   if(!document.gerElementById("imagegallery")) return false;                           
 //check getElementsByTage and getElementById methods 
 var gallery = document.getElementById("imagegallery");
 var links = gallery.getElementById("a");
 for (var i = 0; i < links.length; i++){
  links[i].onclick = function(){
   showPic(this);
   return false;
   }
  }
 }
function showPic(whichpic) { 
            var source = whichpic.getAttribute("href");
            var placeholder = document.getElementById("placeholder");
            placeholder.setAttribute("src", source);
            var text = whichpic.getAttribute("title");
            var description = document.getElementById("description");
            description.firstChild.nodeValue = text;
        }
