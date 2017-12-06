var RegistrationModule=( function(){

var output;
var fieldName;
var firstName,lastName,gender,email,password,confirmPassword,profession,securityQuestion,securityAnswer;
var y;

function registration()
{
	get_Data();
}

function registration1()
{

	get_Data1();
}

function get_Data(){
	 firstName=document.getElementById("fname").value;
	 lastName=document.getElementById("lname").value;
	 gender=document.getElementById("gender").value;
	 email=document.getElementById("email").value;
	 password=document.getElementById("password").value;
	 confirmPassword=document.getElementById("cpassword").value;
	 profession=document.getElementById("profession").value;
	 securityQuestion=document.getElementById("squestion").value;
	 securityAnswer=document.getElementById("sanswer").value;
	 fieldName=[firstName,lastName,gender,email,password,confirmPassword,profession,securityQuestion,securityAnswer];
	 if(validation())
	 {
	 	alert('Successfully registered..');
        var data={firstName:firstName,lastName:lastName,gender:gender,email:email,password:password,profession:profession,securityQuestion:securityQuestion,securityAnswer:securityAnswer};
        StorageModule.setValues(data);
	 	document.getElementById("login_page").style.display = "block";
		document.getElementById("registration_page").style.display = "none";
	 }

}


function get_Data1(){
	 firstName=document.getElementById("afname").value;
	 lastName=document.getElementById("alname").value;
	 gender=document.getElementById("agender").value;
	 email=document.getElementById("aemail").value;
	 password=document.getElementById("apassword").value;
	 confirmPassword=document.getElementById("acpassword").value;
	 profession=document.getElementById("aprofession").value;
	 securityQuestion=document.getElementById("asquestion").value;
	 securityAnswer=document.getElementById("asanswer").value;
	 fieldName=[firstName,lastName,gender,email,password,confirmPassword,profession,securityQuestion,securityAnswer];
	 console.log("Looooo111111111");
	 var data={firstName:firstName,lastName:lastName,gender:gender,email:email,password:password,profession:profession,securityQuestion:securityQuestion,securityAnswer:securityAnswer};
	 if(checkEmail())
	{
		if(password!==confirmPassword)
		{
			alert("Password and Confirm Password does not match");
			success=false;
		}
		else
		{
		 alert("Student Successfully Added");
		 StorageModule.setValues(data);
	     document.getElementById("teacher_addStudent").style.display = "none";
		}
	}
	else
	{
			alert("Email Id not Valid");
	}
		
}


function checkEmail(){
	var re= /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9]+(\.[a-z0-9]+)*(\.[a-z]{2,3})$/;
	if(re.test(email))
		{
			validEmail=true;
			var data=StorageModule.getFullRecords();
			for(i=0;i<StorageModule.getFullLength();i++)
			{
				if(data[i].email=== email)
				{
					validEmail=false;
					alert("Email already Exist");
				}
			}
			if(validEmail)
				return true;
			else
				return false;
		}
	else
		return false;
}

function checkNamePattern()
{
	var reff=/^[a-zA-Z].+$/;
	if( firstName!=="")
	{
		if(reff.test(Name) )
		{
			return true;
		}
		else
		{
			document.getElementById("changefname").style.display="inline";
			return false;
		}
	}
	if(lastName!=="")
	{
		if(reff.test(lastName))
		{
			return true;
		}
		else
		{
			document.getElementById("changelname").style.display="inline";
			return false;
		}
	}
}

function validation()
{
	console.log("Looooo2222222222");
	output=true;
	validEmail=true;

	if(checkEmail())
	{
		validEmail=true;
	}
	else
	{
		document.getElementById("notValidEmail").style.display="inline";
		validEmail=false;
	}
	
	if(password!==confirmPassword)
	{
		alert("Password and Confirm Password does not match");
		success=false;
	}
	else
	{
		success=true;
	}

	if(checkNamePattern(firstName))
	{	success=true;}
	else
	{	success=false;}

	var x = document.getElementsByClassName("warning");
    for (i = 0; i < x.length; i++) 
    {
    	if(fieldName[i]==="")
    	{
    		console.log("Looooo33333333");
	    	if(fieldName[3]==="")
	    		{document.getElementById("notValidEmail").style.display="none";}
	    	x[i].style.display="inline";
	    	success=false;
    	}
		else
		{
			console.log("Looooo44444");
			x[i].style.display="none";	
		}

    }

    if(validEmail)
    	return success;
    else
    	return false;

}


return {
	register:registration,
	register1:registration1
}

})();