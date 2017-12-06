var MemberDisplay=(function(){

function displayMembers()
{
	document.getElementById("userInfo").style.display = "none";
	document.getElementById("teacher_addStudent").style.display = "none";
	document.getElementById("student_teacher_page").style.display = "block";

	
	document.getElementById("userDetails").style.display = "block";
	console.log("sfsdfsdf");
	var details;
	var i=StorageModule.getIndexValue();
	var tags='<div class="stud_teach"><table cellpadding="10" width="100%;"><tr><th>First Name</th><th>Last Name</th><th>Gender</th><th>Email Id</th><th>Profession</th></tr>';
	var j=0,len;
	console.log(i);
	details=StorageModule.getFullRecords();
	len=StorageModule.getFullLength();
	console.log(details[i].profession);

	while(j<len)
	{
/*		console.log(i);
		console.log(details[j].profession);*/
		if(details[i].profession===details[j].profession)
			j++;
		else
		{
			tags+='<tr><td>'+details[j].firstName+'</td><td>'+details[j].lastName+'</td><td>'+details[j].gender+'</td><td>'+details[j].email+'</td><td>'+details[j].profession+'</td></tr>';
			j++;

			console.log("222");
		}

	}
	tags+='</table></div>';
	document.getElementById("userDetails").innerHTML = tags;
}


return{
	displayMembers:displayMembers
}

})();