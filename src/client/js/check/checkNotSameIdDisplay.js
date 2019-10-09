const isNotSameIdInDisplay = function(id) {

    // Check if the same id is in a display
    const travelDataArray = document.querySelectorAll('.card');
    for(const data of travelDataArray) {
        if(Number(id) === Number(data.getAttribute('id'))){
            return false;
        }
    }
    return true;
}

export default isNotSameIdInDisplay;