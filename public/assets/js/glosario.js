var used = Array();
function shortCode(){
  that = this;
  this.escapeRegExp = function(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }

  this.replaceTextNode = function(node,elm1,elm2,elm3){
  }

  this.replaceShortcode = function(code,replacement_html,element){
    if(!element) element=document.body;
    var nodes=element.childNodes;
    for(var n=0;n<nodes.length;n++){
      if(nodes[n].nodeType==Node.TEXT_NODE){
        if(nodes[n].textContent.match(new RegExp(that.escapeRegExp(code),'gi'))){
          var newtextContent=nodes[n].textContent.replace(new RegExp(that.escapeRegExp(code),'gi'), replacement_html);
          $(nodes[n]).before(newtextContent).remove();
        }
      }else{
        that.replaceShortcode(code, replacement_html, nodes[n]);
      }
    }
  }

  this.findShortcodes = function(element){
    if(!element) element=document.body;
    return document.body.innerHTML.match(/\@\@(.+?)\@\@/g);
  }

  Array.prototype.indexOf = function(obj, start) {
     for (var i = (start || 0), j = this.length; i < j; i++) {
         if (this[i] === obj) { return i; }
     }
     return -1;
}

  
  this.activateShortcodes = function(element){
    var shortcodes = that.findShortcodes(element);
    $(shortcodes).each(function(i){
      var shortcode = this;
      
      if ( (this.toString() in used) == false) 
      {
        console.log(used);
        used[this.toString()] = this.toString();
        $.ajax('/section/getword', {
                     success: function(data){that.installWidget(shortcode, data);}, 
                     error:   function(data){that.showError(shortcode, data);},
                     method: 'post',
                     data: {'word': this}
              });
      }
      });

  }

  this.installWidget = function(shortcode, data){
    that.replaceShortcode(shortcode, data);
    $('.tooltip').tooltipster({
    contentAsHTML: true,
    interactive: true
    });
  }

  this.showError = function(shortcode, request){
    that.replaceShortcode(shortcode, '<span class="shortcode-error">'+request.statusText+'</span>');
  }
}


$(function(){
  var shortcode = new shortCode();
  shortcode.activateShortcodes(); 
});      