/* modelo */
const { Cake, Comment } = require("../models/ratecakes")

async function list_cakes(req, res) {
    //lista todas las cakes
    await Cake.find()
        .then( (cakes) => {
            console.log('Entregado OK list_cakes()' + cakes)
            res.json(cakes)
        } )
        .catch( (error) =>{
            console.log('Error list_cakes()' + error)
            res.json(error)
        } )
}

async function new_cakes(req, res){
    //Nueva cakes
    const { name, url } = req.body;
    const newcakes = new Cake
    newcakes.name =  name
    newcakes.url = url
    await newcakes.save()
        .then( (cakes) => {
            console.log('Agregado OK new_cakes()' + cakes)
            res.json( cakes )
        } )
        .catch( (error) =>{
            console.log('Error new_cakes()' + error)
            res.json( error )
        } )
}
    

async function getid_cake (req, res) {
    await Cake.findOne( { _id: req.params.id})
        .then((cake) => {
            console.log('Entregado OK getid_cake()' + cake)
            res.json(cake)
        })
        .catch( (error) =>{
            console.log('Error getid_cake()' + error)
            res.json( error )
        })
}

async function new_comment(req, res){
    // const Comment = cnxmongoose.model('Comment', CommentSchema)
    // const Cake = cnxmongoose.model('Cakes', CakesSchema)
    console.log(req)
    Comment.create(req, function( error, data) {
            if (error) {
                console.log('Error new_comment()' + error)
                res.json( error )
            } else {
                console.log('Commentario')
                console.log(data)
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
                                res.json( {message: 'Cake no actualizo commentario'})
                            }
                        }
                    }
                )

            }

        }
        )
    

/*    
    const { comment, rate } = req.body;
    const newcakes = new Comment
    Comment.comment =  comment
    Comment.rate = rate
    await Comment.save()
        .catch( (error) =>{
            console.log('Error new_comment()' + error)
            res.json( error )
        })
        .then(async (respuesta) => {
            console.log('Commentario')
            console.log(respuesta)
            await Cake.findOneAndUpdate(
                    { _id: req.params.id},
                    {$push: {comments: respuesta } }
                ).then( (resp_comment) => {
                    console.log('Commentario OK new_comment()' + resp_comment)
                    res.send( {respuesta:"Se grabo OK"})
                } )
                .catch( (error) =>{
                    console.log('Error new_comment()' + error)
                    res.json( error )
                } )
        })
        */
}

module.exports = {
    list_cakes,
    new_cakes,
    getid_cake,
    new_comment }
