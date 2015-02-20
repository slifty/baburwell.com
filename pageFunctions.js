function changePage(newURL)
{
 /*
  * This function assumes the area that will have the main content will be called mainSpace
  */
 f=window.frames['hiddenFrame'];
 t=document.getElementById('mainSpace');

 t.vAlign="middle";
 t.innerHTML="<center><span Class=\"loadingText\">Loading...</span></center>";

 f.location="IncludedFiles/"+newURL;
}

function viewPage()
{
 f=window.frames['hiddenFrame'];
 t=document.getElementById('mainSpace');

 t.vAlign="top";
 
 t.innerHTML = f.document.body.innerHTML;
}


var timedVHeightChangeIntervalID = [];
var callbackFunction = "";
var vHeightStatus = "";
var hoveredMenu = "";
var hoveredImage = "";

function checkHover()
{
 if(hoveredMenu != vHeightStatus)
 {
  if(vHeightStatus != "")
  {
   startLength = timedVHeightChangeIntervalID.length;
   for(x = 0; x < startLength ; ++x)
   {
   }
   normalContent(vHeightStatus);
   vHeightChange(vHeightStatus, 35);
   vHeightStatus = "";
  }
  if(hoveredMenu != "")
  {
   vHeightStatus = hoveredMenu;
  }
 }
}

function menuHover(menuID)
{
 hoveredMenu = menuID;
}