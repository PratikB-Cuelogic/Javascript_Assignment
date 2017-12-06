var LoginModule =(function(){

	function signup()
	{

		document.getElementById("registration_page").style.display = "block";
		document.getElementById("login_page").style.display = "none";
	}

	function login()
	{
		var lFirstName,lPassword,whoAmI;
		 lFirstName=document.getElementById("login_email").value;
		 lPassword=document.getElementById("login_password").value;
		 if(StorageModule.checkLoginUser(lFirstName,lPassword))
		{
			alert("Login Successfull");
			document.getElementById("login_page").style.display = "none";
			var i=StorageModule.getIndexValue();
			var data=StorageModule.getPersonalDetails();
			document.getElementById('user').innerHTML="Hello, "+data.firstName;
			if(data.profession=== 'Teacher')
			{
			document.getElementById("addStudent").style.display="block";
			document.getElementById("login_check").innerHTML = "student";
			}
			else
			{
			document.getElementById("login_check").innerHTML = "teacher";	
			}
			HomeModule.showUserDetails();
			document.getElementById("header").style.display="block";
		}
		else
		{
			alert("Login not Successfull");
		}
	}

	return{
		signup:signup,
		login:login
	}

})();