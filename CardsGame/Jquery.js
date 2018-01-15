var $ = jQuery;

function jQuery(selector)
{
        return document.getElementById(selector.substring(1));
}

Object.prototype.on = function(a, b){
        this.addEventListener(a, b);	
};