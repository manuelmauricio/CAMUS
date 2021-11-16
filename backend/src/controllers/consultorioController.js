const Consultorio = require('../models/consultorioschema');

exports.consultorio_create = async (req,res) => {
    const {body} = req;

    let newConsultorio = new Consultorio(req.body);

    await newConsultorio
     .save()
     .then((newDBObject) => console.log("Se a agregado:",newDBObject))
     .catch((err) => console.log("error", err));

    res.send(newConsultorio);
};

exports.consultorio_getall = async (req,res) =>{
    const data = await Consultorio.find();
    res.send(data);
};

exports.consultorio_getbyid = async (req,res) =>{
    const {id} = req.params;
    const data = await Consultorio.findById(id);
    res.send(data);
 };

 exports.consultorio_update = async (req,res) =>{
    const {id} = req.params;
    const {body} = req;

    const data = await Consultorio.findOneAndUpdate({_id: id}, body);
    res.send(data);
};

exports.consultorio_delete = async (req,res) =>{
    const {id} = req.params;
    await Consultorio.deleteOne({_id: id})
    .catch((err) => console.log("ERROR:", err));
    res.send({message: "Registro Borrado"});
};