const User = require('../models/userSchema');

exports.user_create = async (req,res) => {
    //tomar los datos del body 
    const {body} = req;

    //validación de información
    //res.send({message: "El campo no contiene esa validación"})
    let newUser = new User(req.body);

    await newUser
     .save()
     .then((newDBObject) => console.log("Se a creado:",newDBObject))
     .catch((err) => console.log("error", err));

    res.send(newUser);
};

exports.user_getall = async (req,res) =>{
    const data = await User.find();
    res.send(data);
};

exports.user_getbyid = async (req,res) =>{
    const {id} = req.params;
    //validación
    const data = await User.findById(id);
    res.send(data);
 };

 exports.user_update = async (req,res) =>{
    const {id} = req.params;
    const {body} = req;

    const data = await User.findOneAndUpdate({_id: id}, body);
    res.send(data);
};

exports.user_delete = async (req,res) =>{
    const {id} = req.params;
    await User.deleteOne({_id: id})
    .catch((err) => console.log("ERROR:", err));
    res.send({message: "Registro Borrado"});
};