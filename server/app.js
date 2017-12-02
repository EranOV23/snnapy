let express = require("express");
let bodyParser = require('body-parser');

let app = express();
let router = express.Router();


app.use(bodyParser.urlencoded({extended: true}));

let data = require("../data/data");
let Address = require("./AddressModel");


router.route("/order")
    .get((req, res) => {
        console.log('Requested node server');
        Address.find(function (err, Address) {
            if (err) return console.error(err);
            res.json(Address);
        });

        // res.json(data);
    })
    .post((req,res)=>{
        let address = new Address(req.body);
        address.save()
            .then( address => res.json(address) )
            .catch( err => res.status(500).send(err) );

        let locationsArr = data.locations;
        locationsArr.push(req.body);
        res.writeHead(302, {'Location': '/addresses'});
        res.end();
    });


app.use("/api", router);

app.listen(9090);

