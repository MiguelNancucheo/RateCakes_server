/* modelo */
const { Cake, Comment } = require("../models/ratecakes")

async function list_Cakes(req, res) {
    //lista todas las cakes
    await Cake.find({}, {"_id":1, "name":1, "url":1} )
        .then( (cakes) => {
            // console.log('Entregado OK list_cakes()' + cakes)
            res.json(cakes)
        } )
        .catch( (error) =>{
            console.log('Error list_cakes()' + error)
            res.json(error)
        } )
}

async function new_Cake(req, res){
    //Nueva cakes
    const { name, url } = req.body;
    const newcakes = new Cake
    newcakes.name =  name
    newcakes.url = url
    await newcakes.save()
        .then( (cakes) => {
            // console.log('Agregado OK new_cakes()' + cakes)
            res.json( cakes )
        } )
        .catch( (error) =>{
            console.log('Error new_cakes()' + error)
            res.json( error )
        } )
}
    

async function getId_Cake (req, res) {
    await Cake.findOne( { _id: req.params.id},
         {"_id":1, "name":1, "url":1, "comments":1} )
        .then((cake) => {
            // console.log('Entregado OK getid_cake()' + cake)
            res.json(cake)
        })
        .catch( (error) =>{
            console.log('Error getid_cake()' + error)
            res.json( error )
        })
}

async function new_Comment(req, res){
    console.log(req.body)
    Comment.create(req.body, function( error, data) {
            if (error) {
                // console.log('Error new_comment()' + error)
                res.json( error )
            } else {
                // console.log('Commentario')
                // console.log(data)
                Cake.findOneAndUpdate(
                    { _id: req.params.id}, {$push: {comments: data } },
                    async function(error, dataupd) {
                        if (error) {
                            console.log('Error new_comment() act. Cake: '+  error)
                            resp.json(error)
                        } else {
                            if (dataupd) {
                                res.json( dataupd)
                            } else {
                                res.json( {message: 'Cake no actualizo commentario'} )
                            }
                        }
                    }
                )
            }
        }
        )
}

async function deleteId_Cake( req, res){
    await Cake.deleteOne( { _id: req.params.id })
    .then((cake) => {
        // console.log('Eliminacion OK deleteId_Cake()' + cake)
        res.json({message: 'Cake Eliminado'})
    })
    .catch( (error) =>{
        console.log('Error deleteId_Cake()' + error)
        res.json( error )
    })
}
module.exports = {
    list_Cakes,
    new_Cake,
    getId_Cake,
    new_Comment,
    deleteId_Cake }
