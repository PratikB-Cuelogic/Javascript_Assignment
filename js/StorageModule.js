	var StorageModule =(function(){

	var storageArray=[];
	storageArray.push({
		firstName: "a", 
		lastName: "a", 
		gender: "Male", 
		email: "a@g.com", 
		password: "a", 
		profession: "Student",
		securityQuestion:"1",
		securityAnswer:"a"
	});
	storageArray.push({
		firstName: "q", 
		lastName: "q", 
		gender: "Male", 
		email: "q@g.com", 
		password: "q", 
		profession: "Teacher",
		securityQuestion:"1",
		securityAnswer:"q"
	});

	function setValues(data)
    {
        storageArray.push(data);
        /*console.log(storageArray);*/
    }
    var indexValue = getIndexValue();

    function getIndexValue(){
    	return this.indexValue;
    }

    function checkLoginUser(email,password)
    {
    	var present=false;
	    for(var i=0;i<storageArray.length;i++)
	    {	
	        if(storageArray[i].email===email && storageArray[i].password===password)
	   	    {
	            present=true;
	            this.indexValue=i;
	            break;
	        }
	    }
        return present;
    }

    function getPersonalDetails()
    {
    	return storageArray[this.indexValue];
    }

    function getFullRecords(){
    	return storageArray;
    }

    function getFullLength()
    {
        return storageArray.length;
    }

    function setPersonalDetails(data)
    {
        storageArray[this.indexValue].firstName=data.firstName;
        storageArray[this.indexValue].lastName=data.lastName;
        storageArray[this.indexValue].email=data.email;
        storageArray[this.indexValue].password=data.password;         
    }

    return{
    	setValues:setValues,
    	checkLoginUser:checkLoginUser,
    	setPersonalDetails:setPersonalDetails,
    	getPersonalDetails:getPersonalDetails,
    	getIndexValue:getIndexValue,
    	getFullLength:getFullLength,
    	getFullRecords:getFullRecords
    }

	})();