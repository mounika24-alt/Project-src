const Product = require('../models/product.model');


//console.log("controller hit");
//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.product_create = function (req, res) {

    console.log("create method called");
    let product = new Product(
        {
            //name: req.body.name,
            //price: req.body.price

            firstName: req.body.firstName,
            email: req.body.email,
            mobileNumber: req.body.mobileNumber,
            education: req.body.education,
            parentsMobileNumber: req.body.parentsMobileNumber,
            linkedIn: req.body.linkedIn,
            track: req.body.track,
            bestProject: req.body.bestProject,
            whyIntern:  req.body.whyIntern,
            elearning:  req.body.elearning,
            innovative: req.body.innovative,
            ability: req.body.ability
        }
    );


//product.save().then(() => console.log('meow'));


    product.save(function (err) {
        console.log("sadsadsad");   
        if (err) {
            return err;
        }
        res.send('Product Created successfully')
    })

    exports.product_details = function (req, res) {
        product.findById(req.params.phone, function (err, product) {
            if (err) return next(err);
            res.send(product);
        })
    };


};
