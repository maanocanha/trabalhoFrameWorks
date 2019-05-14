const express = require('express')
const router = express.Router()
const models = require('../models')
const bodyParser = require('body-parser')
const security = require("../helpers/security")
router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json())

//Create
router.post('/', function (req, res) {
    models.Destino.create(req.body).then(
        destino => res.status(200).send(destino)
    ).catch(err => res.status(500).send(err))
})

//Get all
router.get('/', function(req, res) {
    models.Destino.findAll().then(
        destino => res.status(200).send(destino)
        )
})


//Find one by id
router.get('/:id',  function(req, res) {
    models.Destino.findByPk(req.params.id)
    .then(destino => {
        if (!destino) {
            res.status(404).send("NOT FOUND")
        } 

        res.status(200).send(destino)
    }).catch(err => res.status(500).send(err))
})

//Update
router.put('/:id', function(req, res) {
    models.Destino.findByPk(req.params.id).then(destino => {
        if (!destino) {
            res.status(404).send("NOT FOUND")
        } 

        destino.update(req.body)
        res.status(200).send(destino)
    })

})

//Delete
router.delete('/:id', function(req, res){
    models.Destino.destroy({
        where: {id: req.params.id}
    }).then(book => {
        res.status(200).send('Excluído com sucesso')
    })
})

module.exports = router