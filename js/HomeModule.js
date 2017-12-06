var HomeModule=(function(){
function logout(){
		document.getElementById("login_page").style.display = "block";
		document.getElementById("header").style.display ="none";
		document.getElementById("addStudent").style.display = "none";
		document.getElementById("student_teacher_page").style.display = "none";
		document.getElementById("teacher_addStudent").style.display = "none";
		var x = document.getElementsByClassName("input_content");
    	for (i = 0; i < x.length; i++) 
    		x[i].value= "";
}

function showUserDetails()
{
	document.getElementById("edit_details").style.display = "none";
    document.getElementById("details_update").style.display = "none";
		
	document.getElementById("student_teacher_page").style.display =document.getElementById("userInfo").style.display = "block";
	document.getElementById("teacher_addStudent").style.display =document.getElementById("userDetails").style.display = "none";
	console.log("1111sas");
	var index=StorageModule.getIndexValue();
	var userInfo=StorageModule.getPersonalDetails();
	console.log(userInfo);
	userTag='<table cellpadding="10" width="50%;"><tr><th>First Name</th><td>'+userInfo.firstName+'</td></tr><tr><th>Last Name</th><td>'+userInfo.lastName+'</td></tr><tr><th>Gender</th><td>'+userInfo.gender+'</td></tr><tr><th>Email</th><td>'+userInfo.email+'</td></tr><tr><th>Profession</th><td>'+userInfo.profession+'</td></tr></table>';
	document.getElementById("userInfo").innerHTML=userTag;
}

return{
	logout:logout,
	showUserDetails:showUserDetails
}

})();