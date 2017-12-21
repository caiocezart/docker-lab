module.exports = function(app, db) {  
    app.get('/', (req, res) => {
        res.send('The service is running!');
    })

    app.get('/users', (req, res) => {        
        var users = db.collection('users').find({}).toArray(function(err, users){
            res.send({ 'usersList': users });
        });       
    });

    app.post('/users', (req, res) => {
        const user = { user: req.body.name };        
        db.collection('users').insert(user, (err, result) => {
          if (err) { 
            res.send({ 'error': 'An error has occurred' }); 
          } else {
            res.send(result.ops[0]);
          }
        });
    });
};