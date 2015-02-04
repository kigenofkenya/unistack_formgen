




var formgen = function (form) {
	var fhead=form.header;
	var inputs_in=form.inputs;
var inputs_out="";

    for (var i = 0, f; f = inputs_in[i]; i++) {
     inputs_out= inputs_out+inputgen(f)+'\n';
    }
  


var out='<form class="'+fhead.class+'" action="'+ fhead.action+ '" ' 
		+ 'name="'+ fhead.name+ '" '
		+ 'method="'+ fhead.method+ '" '
		+ 'enctype="multipart/form-data"'
		+  '> \n'+ inputs_out
		+ '<input type="submit" value="' + fhead.submitlabel + '" />'
		+ '\n </form> ';
return out;
	};

function wrappergen(wrapdata){

}
function inputgen(input){
		ihead=input.header;
		var inputheadclose="";
		if('inputtype' in ihead){
			var parsedhead="<"+ ihead.elemtype + ' type="'+ ihead.inputtype+ '"';
			var inputtail="/>";
			
			
		}else{
			var parsedhead='<'+ ihead.elemtype + ' ';
				var inputtail='</'+ ihead.elemtype + '>';
				inputheadclose="/>";
		}
	
		
	var parsedinput = parsedhead;
	var inputbody=input.body;
	
	for (var key in inputbody) {
		var attrs= ' '+key +'="' +  inputbody[key] +'"';
		parsedinput=parsedinput+attrs;
	}
	return(parsedinput+ inputheadclose+ inputtail);
}

module.exports = formgen;

