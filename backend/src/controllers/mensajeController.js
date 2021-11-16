const Mensaje = require('../models/mensajeschema');

exports.mensaje_create = async (req,res) => {
    const {body} = req;

    let newMensaje = new Mensaje(req.body);

    await newMensaje
     .save()
     .then((newDBObject) => console.log("Se a agregado:",newDBObject))
     .catch((err) => console.log("error", err));

    res.send(newMensaje);
};

exports.mensaje_getall = async (req,res) =>{
    const data = await Mensaje.find();
    res.send(data);
};

exports.mensaje_getbyid = async (req,res) =>{
    const {id} = req.params;
    const data = await Mensaje.findById(id);
    res.send(data);
 };

 exports.mensaje_update = async (req,res) =>{
    const {id} = req.params;
    const {body} = req;

    const data = await Mensaje.findOneAndUpdate({_id: id}, body);
    res.send(data);
};

exports.mensaje_delete = async (req,res) =>{
    const {id} = req.params;
    await Mensaje.deleteOne({_id: id})
    .catch((err) => console.log("ERROR:", err));
    res.send({message: "Registro eliminado"});
};