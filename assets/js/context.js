$(function()
{$(this).bind("contextmenu",function(e){e.preventDefault()})});document.onkeydown=function(e){if(e.ctrlKey&&(e.keyCode===67||e.keyCode===65||e.keyCode===80||e.keyCode===86||e.keyCode===85||e.keyCode===83||e.keyCode===117)){return!1}
else if(e.ctrlKey&&e.shiftKey&&e.keyCode===73){return!1}
else{return!0}}