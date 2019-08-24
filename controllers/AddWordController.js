
var DictionaryModel = require('../models/DictionaryModel');

module.exports = function(app) {
    
    app.post('/add-word', function(req, res) {
        var form = new multiparty.Form();
        form.parse(req, function(err, fields, files) {
            console.log('request hit', fields)
            res.send('success')
        // if(req.body.data) {
        //     DictionaryModel.create(req.body.data, (error, success) => {
        //         if(success) {
        //             console.log("success", success)                    
        //             res.send('success')
        //         }
        //         if(error) {
        //             res.send(error)
        //         }
        //     })
        // }
        });
        
    });

}