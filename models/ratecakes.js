const cnxmongoose = require("../config/mongoose")
/* ****************************************************** */
/*    Schema                                              */
/* ****************************************************** */

const CommentSchema = new cnxmongoose.Schema({
    comment: {
            type: String, 
            require: [true, "Se requiere de comment"],
            minlength: [3, 'Mínimo 3 caracteres'], 
            maxlength: [50, 'Máximo 50 caracteres.']
        }, 
    rate: { 
        type: Number, 
        require: [true, "Se requiere de Rate"] }
 }, {timestamps: true})

const CakesSchema = new cnxmongoose.Schema( {
    name: { 
        type: String, 
        requerid: [true, "Se requiere de name Panadero"],
        minlength: [3, 'Mínimo 3 caracteres'], 
        maxlength: [50, 'Máximo 50 caracteres.']
        },
    url: { 
        type: String, 
        require: [true, "Se requiere URL"],
        minlength: [10, 'Mínimo 10 caracteres'] },
    comments: [CommentSchema]
}, {timestamps: true})

const Comment = cnxmongoose.model('Comment', CommentSchema)

const Cake = cnxmongoose.model('Cake', CakesSchema);

module.exports = { Cake, Comment }

