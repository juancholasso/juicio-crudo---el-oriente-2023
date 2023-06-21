
var used = Array();
function BeforeAfter(){
  thatBA = this;
  this.escapeRegExp = function(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }

  this.replaceTextNode = function(node,elm1,elm2,elm3){
  }

  this.replaceBeforeAfterCode = function(code,replacement_html,element){
    if(!element) element=document.body;
    var nodes=element.childNodes;
    for(var n=0;n<nodes.length;n++){
      if(nodes[n].nodeType==Node.TEXT_NODE){
        if(nodes[n].textContent.match(new RegExp(thatBA.escapeRegExp(code),'gi'))){
          var newtextContent=nodes[n].textContent.replace(new RegExp(thatBA.escapeRegExp(code),'gi'), replacement_html);
          $(nodes[n]).before(newtextContent).remove();
        }
      }else{
        thatBA.replaceBeforeAfterCode(code, replacement_html, nodes[n]);
      }
    }
  }

  this.findBeforeAfterCodes = function(element){
    if(!element) element=document.body;
    return document.body.innerHTML.match(/\#\#(.+?)\#\#/g);
  }

  Array.prototype.indexOf = function(obj, start) {
     for (var i = (start || 0), j = this.length; i < j; i++) {
         if (this[i] === obj) { return i; }
     }
     return -1;
}

  
  this.activateBeforeAfterCodes = function(element){
    var beforeaftercodes = thatBA.findBeforeAfterCodes(element);
    $(beforeaftercodes).each(function(i){
      var beforeaftercode = this;
      
      if ( (this.toString() in used) == false) 
      {
        console.log(used);
        used[this.toString()] = this.toString();
        $.ajax('/picture/before_after_insert', {
                     success: function(data){thatBA.installBeforeAfterWidget(beforeaftercode, data);}, 
                     error:   function(data){thatBA.showError(beforeaftercode, data);},
                     method: 'post',
                     data: {'word': this}
              });
      }
      });

  }

  this.installBeforeAfterWidget = function(beforeAfter, data){
    thatBA.replaceBeforeAfterCode(beforeAfter, data);
    console.log('install BEFORE AFTER WIDGET');
    
      
    
    
  }

  this.showError = function(beforeAfter, request){
    thatBA.replaceBeforeAfterCode(beforeAfter, '');
  }
}


$(function(){
  var beforeAfter = new BeforeAfter();
  beforeAfter.activateBeforeAfterCodes(); 
});      