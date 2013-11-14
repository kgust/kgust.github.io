/**
 * This turns a ul/li list into a selectable listmenu
 * 
 * Example markup:
 * 		<ul id='listmenu'>
 * 			<li>Option One</li>
 * 			<li>Option Two</li>
 * 			<li>Option Three</li>
 * 		</ul>
 *
 * Then just call $('#listmenu').listable() to make it a selectable list menu. Use CSS (naturally) to style.
 * A class of "selected" (can be changed with a 'classname' option) will be applied to the selected <li> tag.
 * You can also pass in a callback handler to process actions when an item is selected:
 *
 * 		function callback(text, id, el) {
 * 			alert("You click: " + text);
 * 		}
 * 		$('#listmenu').listable({handler: callback});
 * 
 * @param	options	Hash object of options (optional)
 */
(function($) {
	$.fn.listable = function(options) {
		var opts = $.extend({}, $.fn.listable.defaults, options);
		
		// Find all the <li> children
	  	var children = this.children(opts.childtag);
		
		// Setup the first selected item
		if(opts.selected) {
			children.removeClass(opts.classname);
			children.each(function(i) {
				// Set selected if the index or text or id matches
				if(i == opts.selected || $(this).html() == opts.selected || $(this).attr("id") == opts.selected) $(this).addClass(opts.classname);
			});
		}
		
		// This is the heavy lifting...
		children.click(function() {
			children.removeClass(opts.classname);
			$(this).addClass(opts.classname);
			if(opts.handler) opts.handler.call(this, $(this).html(), $(this).attr("id"), $(this));
		});
		
		// Goodness... we're done already?
	};
	
	$.fn.listable.defaults = {
	 	classname: 'selected',
		childtag: 'li'
	};

})(jQuery);