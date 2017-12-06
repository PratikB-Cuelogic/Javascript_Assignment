var addStudentModule=(function(){
	function showRegistrationBlock(){
		document.getElementById("student_teacher_page").style.display = "none";
		document.getElementById("edit_details").style.display = "none";
		document.getElementById("teacher_addStudent").style.display = "block";

	}

	return{
		showRegistrationBlock:showRegistrationBlock
	}
})();