const isNotSameIdInStorage = function(id) {
    
    // Check if the same id is in local storage
    const travelDataArray = localStorage.getItem('items');
    if(travelDataArray === null) {
        return true;
    }
    for(const data of JSON.parse(travelDataArray)) {
        if (Number(id) === Number(data['travelId'])) {
            return false;
        }
    }

    return true;
}

export default isNotSameIdInStorage;