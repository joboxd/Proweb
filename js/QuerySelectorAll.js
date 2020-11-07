function hacerclic(){
 lista=document.querySelectorAll("#principal p");
lista[0].onclick=mostraralerta;
lista[1].onclick=mostraralerta;
		
}


function mostraralerta(x){
alert('hizo clic!');
	if(x==0){
	lista[x].style.color="orange";
	lista[x].innerHTML="primer cambio";	
}
	else
	
{
	lista[x].style.color="brown";
	lista[x].innerHTML="segundo cambio";
}
	
return false;

}
window.onload=hacerclic;
