import "isomorphic-fetch";

class DataService{

    constructor(){
        this.url = `/api/order`;
    }

    getAllLocations(){
        console.log("load addresses from server");
        return fetch(this.url)
            .then(response => response.json())
            .then(response => response)
    }
}

export default module.exports = new DataService();
