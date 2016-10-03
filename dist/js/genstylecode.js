var elems = document.getElementsByClassName('java-block');
var red = ['String ', 'int ', 'public ', 'static ', 'void ', 'private ', 'protected ', 'try ', 'catch '];
var blue = ['System'];
var red1 = ['equals'];


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


	var chars = block.innerHTML.match('=[ ]{0,1}"5"');
	if(chars != "") {
		var reg=new RegExp("=[ ]{0,1}", "g");
		var tableau=chars[0].split(reg);
		replacement = '= <span class="java-value-string">'+tableau[1]+'</span>';
		replaceAll(chars, replacement, block);
		nb = 1;
	}

	var ptVirg = block.innerHTML.match('[;]');
	if(ptVirg != "") {
		replacement = ';</div>';
		replaceAll(ptVirg, replacement, block);
	}

	var egals = block.innerHTML.match('==');
	console.log(egals);
	if(egals != "") {
		replacement = '<span class="java-property">'+egals+'</span>';
		replaceAll(egals, replacement, block);
	}

	/*search = 'String';
	replacement = '<div><span class="java-type-donnee">String</span>';
	replaceAll(search, replacement, block);

	search = 'ch1';
	replacement = '<span class="java-variable">ch1</span>';
	replaceAll(search, replacement, block);

	search = 'ch2';
	replacement = '<span class="java-variable">ch2</span>';
	replaceAll(search, replacement, block);

	search = '"5"';
	replacement = '<span class="java-value-string">"5"</span>';
	replaceAll(search, replacement, block);

	search = ';';
	replacement = ';</div>';
	replaceAll(search, replacement, block);*/

}

function replaceAll(search, replacement, block) {
	block.innerHTML = block.innerHTML.replace(new RegExp(search, 'g'), replacement);
}
