const express = require ('express');
const  router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

const { InfoModel } = require('../models/infoModels');

router.get('/', (req, res) => {
    InfoModel.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log("Error to get data : " + err);
    })
})

router.post('/', (req, res) => {
    console.log(req.body);
    const newInfo = new InfoModel({
       longitude: req.body.longitude,
       latitude: req.body.latitude ,
       mesure: req.body.mesure
    });

    newInfo.save((err, docs) => {
        if (!err) res.send(docs);
        else console.log('Error creating new data : ' + err);
    })
})

//update
router.put("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID.unknow : " + req.params.id)
        
        const updateInfo = {
            longitude: req.body.longitude,
            latitude: req.body.latitude ,
            mesure: req.body.mesure
        };
        InfoModel.findByIdAndUpdate(
            req.params.id,
            { $set: updateInfo},
            { new: true },
            (err, docs) => {
                if (!err) res.send(docs);
                else console.log("update error :" + err);

            } 
        )
} )

//delete
router.delete("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID.unknow : " + req.params.id)
        
    InfoModel.findByIdAndRemove(
        req.params.id,
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log("Delete error " + err);
        }
    )
    });

module.exports = router; 