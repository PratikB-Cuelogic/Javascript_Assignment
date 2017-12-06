var EditProfile=(function(){

function changeUserProfile(){
	document.getElementById("edit_details").style.display = "block";
	 firstName=document.getElementById("ufname").value;
	 lastName=document.getElementById("ulname").value;
	 email=document.getElementById("uemail").value;
	 password=document.getElementById("upassword").value;
	 cPassword=document.getElementById("ucpassword").value;
	 var userData=StorageModule.getPersonalDetails();	 
	 if(password==="" && cPassword==="")
	 {
	 console.log("ggggggggg");
	 password=userData.password;	
	 alert("Changes Done Successfully");
	 var data={firstName:firstName,lastName:lastName,email:email,password:password};
	 StorageModule.setPersonalDetails(data);
	 }
	 else if(password!==cPassword){
		alert("Password and Confirm Password does not match");
	 }
	 else
	 {
	 	alert("Changes Done Successfully");
	 var data={firstName:firstName,lastName:lastName,email:email,password:password};
	 StorageModule.setPersonalDetails(data);
	 document.getElementById('user').innerHTML="Hello, "+firstName;
	 document.getElementById("edit_details").style.display = "none";
	 }

}


function displayUserProfile()
    {
    	document.getElementById("edit_details").style.display = "block";
    	document.getElementById("details_update").style.display = "block";
    	document.getElementById("student_teacher_page").style.display = "none";
        i=StorageModule.getIndexValue();
        var personalData=StorageModule.getPersonalDetails();
        document.getElementById('ufname').value=personalData.firstName;
        document.getElementById('ulname').value=personalData.lastName;
        document.getElementById('uemail').value=personalData.email;
    }

return{
	changeUserProfile:changeUserProfile,
	displayUserProfile:displayUserProfile
}

})();