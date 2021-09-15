const NotaMedica = require('../models/notamedicaschema');

exports.notaMedica_create = async (req,res) => {
    const {body} = req;

    let newNotaMedica = new NotaMedica(req.body);

    await newNotaMedica
     .save()
     .then((newDBObject) => console.log("Se a agregado:",newDBObject))
     .catch((err) => console.log("error", err));

    res.send(newNotaMedica);
};

exports.notaMedica_getall = async (req,res) =>{
    const data = await NotaMedica.find();
    res.send(data);
};

exports.notaMedica_getbyid = async (req,res) =>{
    const {id} = req.params;
    const data = await NotaMedica.findById(id);
    res.send(data);
 };

 exports.notaMedica_update = async (req,res) =>{
    const {id} = req.params;
    const {body} = req;

    const data = await NotaMedica.findOneAndUpdate({_id: id}, body);
    res.send(data);
};

exports.notaMedica_delete = async (req,res) =>{
    const {id} = req.params;
    await NotaMedica.deleteOne({_id: id})
    .catch((err) => console.log("ERROR:", err));
    res.send({message: "Registro eliminado"});
};