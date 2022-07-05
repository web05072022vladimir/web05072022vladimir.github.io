
	
	
	
	
	
	function new_table()
	{
	txt=document.querySelector("textarea");	
	z=txt.value;
	x=0;
	t=document.createElement('table');
	t.border=1;
	while(x<z) {
		tr=document.createElement('tr');
		y=0;
			while(y<z)
			{ 
			td=document.createElement('td');
			td.innerHTML=x+"."+y;
			tr.append(td);y++;
			}
		t.append(tr);
		x++;
			}
document.body.append(t);
	}
	//new_table(100);
	
	
	function bukvi()
	{
	txt=document.querySelector("textarea");	
	slovo=txt.value;
	for(i=0;i<slovo.length;i++)
		{
		el=document.createElement("div");
		el.innerHTML=slovo[i];
		document.body.append(el);
		}
	
	}
	
	
	window.onload=function() {
	console.log("ОКНО ЗАГРУЖЕНО!");
	
	}
		
	window.addEventListener("DOMContentLoaded", function() {
		console.log("ДОМ КОНТЕНТ ЛОАДЕД");
 	});
	
	console.log("ЗАГРУЗКА СКРИПТА");
	