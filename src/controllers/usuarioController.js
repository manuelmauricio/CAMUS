const Usuario = require('../models/usuarioschema');

exports.usuario_create = async (req,res) => {
    const {body} = req;

    let newUsuario = new Usuario(req.body);

    await newUsuario
     .save()
     .then((newDBObject) => console.log("Se a agregado:",newDBObject))
     .catch((err) => console.log("error", err));

    res.send(newUsuario);
};

exports.usuario_getall = async (req,res) =>{
    const data = await Usuario.find();
    res.send(data);
};

exports.usuario_getbyid = async (req,res) =>{
    const {id} = req.params;
    const data = await Usuario.findById(id);
    res.send(data);
 };

 exports.usuario_update = async (req,res) =>{
    const {id} = req.params;
    const {body} = req;

    const data = await Usuario.findOneAndUpdate({_id: id}, body);
    res.send(data);
};

exports.usuario_delete = async (req,res) =>{
    const {id} = req.params;
    await Usuario.deleteOne({_id: id})
    .catch((err) => console.log("ERROR:", err));
    res.send({message: "Registro eliminado"});
};