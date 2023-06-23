const db = require("../model")
const Item = db.item

exports.getAll = (req, res)=>{

    Item.find().then(data=>{
        res.send(data)
        console.log(data)
    })
    .catch(error=>{
        res.status(500).send("could not find item", error)
        console.log("could not find item", error)
    })
}

exports.create = async (req, res)=>{
    if(!req.body){
        res.status(400).send("cannot add without info")
        return
    }
    // let results;

    const item = new Item({
        itemname: req.body.itemname,
        price: req.body.price,
        category: req.body.category,
        details : req.body.details,
        picture : req.body.picture
    })

    try{
        item.save()
        .then(item=>{
            console.log(item)
            res.send(item)
        })
        return
    } catch (err){
        res.status(500).send('could not create new item')
        console.log(`some err occured : ${err.message}`)
    }
}

exports.deleteAll = (req, res)=>{

    Item.deleteMany()
    .then(data=>{
        res.send(data)
        console.log(data)
    })
    .catch(error=>{
        res.status(500).send("Could not delete all items", error)
        console.log("Could not delete all", error)
    })
}

exports.deleteOne = (req,res)=>{
    const id = req.params.id

    Item.findByIdAndRemove(id, { useFindModify: false })
    .then(data => {
        if(!data) {
            res.status(404).send({
                msg: `cannot delete User with id=${id}. Maybe it was not exit`
            })
        }else res.status(201).send({ msg: "item was deleted successfully"})
    })
    .catch(err => {
        res.status(500).send({ msg: `error deleting User with id=${id}, error: ${err}`})
    })
}

exports.update = (req, res)=>{
    if(!req.body){
        res.status(400).send("cannot update item")
        return;
    }
    const id = req.params.id

    Item.findByIdAndUpdate(id, req.body, { UseFindAndModify: false}) 
        .then(data => {
            if(!data) {
                res.status(404).send({
                    msg: `cannot update item with id=${id}. maybe it was not found`
                })
            }else res.status(201).send({ msg: "Item was updated successfully."})
        })
        .catch(err => {
            res.status(500).send({ msg: `error updating Item with id=${id} ${err}`})
        })
}

        exports.getOne = (req,res)=>{
            const id = req.params.id
        
        Item.findById(id)
        .then(data =>{
            res.send(data)
            console.log(data) 

        })
        .catch(error=>{
                res.status(500).send("could not find item", error)
                console.log("could not find item", error)
        })
    
    
        
}