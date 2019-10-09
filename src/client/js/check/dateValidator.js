function validDate(userInputDate) {
        // Only MM/DD/YYYY format
        if(!userInputDate.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/)){
            alert('Confirm your format!');
            return false;
        }
    
        // Don't permit the date, which doesn't exist
        var date = new Date(userInputDate);  
        if(date.getMonth() != userInputDate.split("/")[0] - 1 
            || date.getDate() != userInputDate.split("/")[1]
            || date.getFullYear() !=  userInputDate.split("/")[2] 
        ) {
            alert('Enter valid date');
            return false;
        } else {
            return true;
        }
}

export default validDate;