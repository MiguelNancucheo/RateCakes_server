module.exports = function(app) {
    const {list_cakes, 
        new_cakes, 
        getid_cake,
        new_comment } = require('../controllers/ratecokes')

    app.get('/', list_cakes) //lista todo los cakes

    app.post('/new', new_cakes) // nueva cakes

    app.get('/cake/:id', getid_cake) //entrega un cake

    app.post('/comment/:id', new_comment) // nueva cakes
}