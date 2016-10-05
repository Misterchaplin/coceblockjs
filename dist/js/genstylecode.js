var elems = document.getElementsByClassName('java-block');
var red = ['String ', 'int ', 'public ', 'static ', 'void ', 'private ', 'protected ', 'try ', 'catch ', 'if', 'else'];
var blue = ['System'];
var red1 = ['equals'];
var carriageReturn = [";","{"];
var carriageReturnAfter = ["}"];


for (i in elems) {
	eachBlock(elems[i]);
}

function eachBlock(block){
	//c = block.innerHTML.replace(/\n/g, "")

	//	if(block.innerHTML.indexOf(";") !== -1) {
		//	console.log(block.innerHTML.indexOf(";"));
		/*	replacement = ';</div>';
			replaceAll(";", replacement, block);*/
	//	}


	for (i=0; i < red.length; i++) {
		if(block.innerHTML.indexOf(red[i]) !== -1) {
			replacement = '<div><span class="java-type-donnee">'+red[i]+'</span>';
			replaceAll(red[i], replacement, block);
		}
	}

	for (i=0; i<blue.length; i++) {
		if(block.innerHTML.indexOf(blue[i]) != -1) {
			replacement = '<div><span class="java-value-string">'+blue[i]+'</span>';
			replaceAll(blue[i], replacement, block);
		}
	}

	for (i=0; i<red1.length; i++) {
		if(block.innerHTML.indexOf(red1[i]) != -1) {
			replacement = '<span class="java-property">'+red1[i]+'</span>';
			replaceAll(red1[i], replacement, block);
		}
	}


	var reg=new RegExp('["]{1}[a-zA-Z0-9]+["]{1}', "g");
	var chars = block.innerHTML.match(reg);
	if(chars != null) {
	for (i=0; i<chars.length; i++) {
			replacement = '<span class="java-value-string">'+chars[i]+'</span>';
			replaceAll(chars[i], replacement, block);
			nb = 1;
		}
	}

	var carriageReturnElement = "";
	for (i=0; i<carriageReturn.length; i++) {
		carriageReturnElement = block.innerHTML.match(carriageReturn[i]);
		if(carriageReturnElement != null) {
			replacement = carriageReturn[i]+'</div>';
			if(carriageReturn[i] == "{"){
				replacement += '<div class="java-ident">'
			}
			replaceAll(carriageReturn[i], replacement, block);
			carriageReturnElement = "";
		}
	}

	var carriageReturnAfterElement = "";
	for (i=0; i<carriageReturnAfter.length; i++) {
		carriageReturnAfterElement = block.innerHTML.match(carriageReturnAfter[i]);
		if(carriageReturnAfterElement != null) {
			replacement = '</div><div>'+carriageReturnAfter[i]+'</div>';
			replaceAll(carriageReturnAfter[i], replacement, block);
			carriageReturnAfterElement = "";
		}
	}

	var egals = block.innerHTML.match('==');
	if(egals != "") {
		replacement = '<span class="java-property">'+egals+'</span>';
		replaceAll(egals, replacement, block);
	}

}

function replaceAll(search, replacement, block) {
	block.innerHTML = block.innerHTML.replace(new RegExp(search, 'g'), replacement);
}
