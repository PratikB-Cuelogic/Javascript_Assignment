function reg_open()
{
	document.getElementById("registration_page").style.display = "block";
	document.getElementById("login_page").style.display = "none";
}


function details()
{
	document.getElementById("login_page").style.display = "block";
	document.getElementById("registration_page").style.display = "none";

}

function onclear()
{
	    var x = document.getElementsByClassName("input_content");
    	for (i = 0; i < x.length; i++) 
    		x[i].value= "";
}

