
$.fn.dataTable.Editor.fieldTypes.slider = {
    "create": function (conf) {
		var myArray = {};
        conf._input = $(
            '<div class="slider">'+
                '<input id="'+conf.id+'" value="" type="hidden" class="string slider optional form-control" />'+
            '</div>'
        )           
        .attr( $.extend( {}, conf.attr ) )
		.ionRangeSlider({
            onChange: function (data) {
		        conf._input.children('input').val(data.from)
		    },
		    onFinish: function (data) {
		        conf._input.children('input').val(data.from)
		    },
		    onUpdate: function (data) {
		        conf._input.children('input').val(data.from)
		    }
	    });
	    slider=conf._input.data("ionRangeSlider");
	    	
	    for (i=0; i<conf.options.length; i++) {
	    	myArray[conf.options[i].label]=conf.options[i].value;
	    }
    	slider.update(myArray);

        return conf._input[0];
    },
    "set": function(conf,val) {
    	slider=conf._input.data("ionRangeSlider");
		slider.update({from: val});
		conf._input.children('input').val(val);
    },
    "get": function(conf) {
    	slider=conf._input.data("ionRangeSlider");
		return conf._input.children('input').val();
    }
}