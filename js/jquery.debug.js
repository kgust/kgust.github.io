;(function($){

    $.fn.debug = function(settings) {
        var config = { 'foo' : 'bar' };

        if (settings) $.extend(config, settings);

        this.each(function(i,e) {
            // element specific code here
            console.log(e);
        });

        return this;
    };

})(jQuery);
