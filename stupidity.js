a = document.getElementsByTagName('p');

for(var i=0; i<a.length;i++)
{
	if (a[i].innerHTML.indexOf("Salman Khan") >= 0)
	{
		a[0].parentElement.parentElement.style.visibility = 'hidden';
	}

}
