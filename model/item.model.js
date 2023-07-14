module.exports= mongoose=>{
    var schemaitem = mongoose.Schema({
    itemname: {
        type: String,
        require: true
    },
    price:{
        type: Number
    },
    category:{
        type: String
    },
    details:{
        type: String
    },
    picture:{
        type: String
    },
    quantity: {
        type: Number
    }




    })
schemaitem.method("toJSON", function() {
    const {_v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

let item = mongoose.model('item',schemaitem );
return item
}