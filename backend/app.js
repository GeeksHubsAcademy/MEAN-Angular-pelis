const express = require('express')
const app = express();
const UserModel = require('./models/User')
const mongoose = require('mongoose')
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST,PUT,DELETE");
    next();
});
app.use(express.json()); //parseamos el body a json

mongoose.connect('mongodb://localhost:27017/movies', //conexión a MongoDB
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
    .then(() => console.log('conectado a mongodb'))
    .catch(error => console.log('Error al conectar a MongoDB ' + error));

app.get('/user', (req, res) => {
    UserModel.find({})
        .then(users => res.send(users))
        .catch(error => console.log(error))
})
app.post('/user/register', async (req, res) => {
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
app.patch('/user/:id', (req, res) => {
    UserModel.findByIdAndUpdate(req.params.id, {
            ...req.body
        }, {
            new: true,
            useFindAndModify: false
        })
        .then(user => res.send(user))
        .catch(error => console.log(error))
});
app.delete('/user/:id', (req, res) => {
    UserModel.findByIdAndDelete(req.params.id)
        .then(user => res.send('Usuario eliminado satisfactoriamente'))
        .catch(error => console.log(error))
})
app.listen(3000, () => console.log('servidor levantado correctamente'));