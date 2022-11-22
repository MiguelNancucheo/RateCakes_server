module.exports = function(app) {
    const {list_Cakes, 
        new_Cake, 
        getId_Cake,
        new_Comment,
        deleteId_Cake } = require('../controllers/ratecokes')

    app.get('/cakes', list_Cakes) //lista todo los cakes

    app.post('/newcake', new_Cake) // nueva cakes

    app.get('/cake/:id', getId_Cake) //entrega un cake

    app.put('/cakecomment/:id', new_Comment) // nueva cakes

    app.delete('/cake/:id', deleteId_Cake) //Borrar por IDe
}