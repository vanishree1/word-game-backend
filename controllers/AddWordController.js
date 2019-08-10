
module.exports = function(app) {
    
    app.post('/add-word', function(req, res) {
        if(req.body.data) {
            console.log('res', req.body.data)
            res.send('success')
        }
    });

}