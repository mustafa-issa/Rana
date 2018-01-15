var $ = jQuery;

function jQuery(selector)
{
	if (selector.indexOf(".") == 0){
		return document.getElementsByClassName(selector.substr(1));		
	}
	else {
        return document.querySelectorAll(selector);
    }

}

Object.prototype.on = function(a, b){
    for(var i=0; i<this.length; i++) {
        this[i].addEventListener(a, b);
    }
	
};