let db = require("./db");

let scheme = db.Schema({
    "firstName": { type: String, required: true },
    "lastName": { type: String, required: true },
    "address": { type: String, required: true },
    "zipCode": { type: Number, required: true },
    "city": { type: String, required: true },
    "email": { type: String, required: true },
    "phone": String,
    "notes": String,
});

let Address = db.model("Address", scheme);

module.exports = Address;
