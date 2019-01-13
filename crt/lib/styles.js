// stack overflow code
export default function getProperty(classOrId, property){ 
  var FirstChar = classOrId.charAt(0);  
  var Remaining= classOrId.substring(1);
  var elem = (FirstChar =='#') ?  document.getElementById(Remaining) : document.getElementsByClassName(Remaining)[0];
  return window.getComputedStyle(elem,null).getPropertyValue(property);
}