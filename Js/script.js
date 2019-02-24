function getangkasebelumnya(){
	return document.getElementById("nilaiangkasebelumnya").innerText;
}
function printangkasebelumnya(num){
	document.getElementById("nilaiangkasebelumnya").innerText=num;
}
function gethasilkeluar(){
	return document.getElementById("nilaihasilkeluar").innerText;
}
function printhasilkeluar(num){
	if(num==""){
		document.getElementById("nilaihasilkeluar").innerText=num;
	}
	else{
		document.getElementById("nilaihasilkeluar").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printangkasebelumnya("");
			printhasilkeluar("");
		}
		else if(this.id=="backspace"){
			var hasilkeluar=reverseNumberFormat(gethasilkeluar()).toString();
			if(hasilkeluar){//if hasilkeluar has a value
				hasilkeluar= hasilkeluar.substr(0,hasilkeluar.length-1);
				printhasilkeluar(hasilkeluar);
			}
		}
		else{
			var hasilkeluar=gethasilkeluar();
			var angkasebelumnya=getangkasebelumnya();
			if(hasilkeluar==""&&angkasebelumnya!=""){
				if(isNaN(angkasebelumnya[angkasebelumnya.length-1])){
					angkasebelumnya= angkasebelumnya.substr(0,angkasebelumnya.length-1);
				}
			}
			if(hasilkeluar!="" || angkasebelumnya!=""){
				hasilkeluar= hasilkeluar==""?hasilkeluar:reverseNumberFormat(hasilkeluar);
				angkasebelumnya=angkasebelumnya+hasilkeluar;
				if(this.id=="="){
					var hasil=eval(angkasebelumnya);
					printhasilkeluar(hasil);
					printangkasebelumnya("");
				}
				else{
					angkasebelumnya=angkasebelumnya+this.id;
					printangkasebelumnya(angkasebelumnya);
					printhasilkeluar("");
				}
			}
		}
		
	});
}
var angka = document.getElementsByClassName("angka");
for(var i =0;i<angka.length;i++){
	angka[i].addEventListener('click',function(){
		var hasilkeluar=reverseNumberFormat(gethasilkeluar());
		if(hasilkeluar!=NaN){ //if hasilkeluar is a angka
			hasilkeluar=hasilkeluar+this.id;
			printhasilkeluar(hasilkeluar);
		}
	});
}