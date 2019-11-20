const router = require('express').Router();
const UserModel = require('../models/User')
router.get('/', (req, res) => {
    UserModel.find({})
        .then(users => res.send(users))
        .catch(error => console.log(error))
})
router.post('/register', async (req, res) => {
    try {
        const user = await new UserModel({
            username: req.body.username,
            password: req.body.password
        }).save()
        res.send(user)
    } catch (error) {
        console.log(error);
    }
})

router.post('/login', (req, res) => {
    UserModel.findOne({
            username: req.body.username,
            password: req.body.password
        })
        .then(user => {
            if (!user) {
                return res.status(400).send({
                    message: 'Usuario o contraseña incorrectos'
                })
            }
            res.send({
                message: 'Bienvenido ' + user.username,
                user
            });
        })
        .catch(error => res.send(error.message))
})

router.patch('/:id', (req, res) => {
    UserModel.findOneAndUpdate({
            _id: req.params.id
        }, req.body, {
            new: true,
            useFindAndModify: false
        })
        .then(user => res.send(user))
        .catch(error => console.log(error))
});
router.delete('/:id', (req, res) => {
    UserModel.findByIdAndDelete(req.params.id)
        .then(user => res.send('Usuario eliminado satisfactoriamente'))
        .catch(error => console.log(error))
})

module.exports = router;