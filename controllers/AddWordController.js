
module.exports = function(app) {
    
    app.post('/add-word', function(req, res) {
        console.log('res', req)
        if(req.word) {
            res.send(200)
        }
    });

}