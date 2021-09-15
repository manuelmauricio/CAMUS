const Padecimiento = require('../models/padecimientoSchema');

exports.padecimiento_create = async (req,res) => {
    const {body} = req;

    let newPadecimiento = new Padecimiento(req.body);

    await newPadecimiento
     .save()
     .then((newDBObject) => console.log("Se a agregado:",newDBObject))
     .catch((err) => console.log("error", err));

    res.send(newPadecimiento);
};

exports.padecimiento_getall = async (req,res) =>{
    const data = await Padecimiento.find();
    res.send(data);
};

exports.padecimiento_getbyid = async (req,res) =>{
    const {id} = req.params;
    const data = await Padecimiento.findById(id);
    res.send(data);
 };

 exports.padecimiento_update = async (req,res) =>{
    const {id} = req.params;
    const {body} = req;

    const data = await Padecimiento.findOneAndUpdate({_id: id}, body);
    res.send(data);
};

exports.padecimiento_delete = async (req,res) =>{
    const {id} = req.params;
    await Padecimiento.deleteOne({_id: id})
    .catch((err) => console.log("ERROR:", err));
    res.send({message: "Registro eliminado"});
};