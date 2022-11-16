const cnxmongoose = require("../config/mongoose")
/* ****************************************************** */
/*    Schema                                              */
/* ****************************************************** */

const CommentSchema = new cnxmongoose.Schema({
    comment: {type: String, require: [true, "Se requiere de comment"]}, 
    rate: { type: Number, require: [true, "Se requiere de Rate"]}
 }, {timestamps: true})

const CakesSchema = new cnxmongoose.Schema( {
    name: { type: String, requerid: [true, "Se requiere de name"]},
    url: { type: String, require: [true, "Se requiere URL"]},
    comments: [CommentSchema]
}, {timestamps: true})

const Comment = cnxmongoose.model('Comment', CommentSchema)

const Cake = cnxmongoose.model('Cake', CakesSchema);

module.exports = { Cake, Comment }

