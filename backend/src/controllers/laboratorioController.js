const Laboratorio = require('../models/laboratorioSchema');

exports.laboratorio_create = async (req,res) => {
    const {body} = req;

    let newLaboratorio = new Laboratorio(req.body);

    await newLaboratorio
     .save()
     .then((newDBObject) => console.log("Se a agregado:",newDBObject))
     .catch((err) => console.log("error", err));

    res.send(newLaboratorio);
};

exports.laboratorio_getall = async (req,res) =>{
    const data = await Laboratorio.find();
    res.send(data);
};

exports.laboratorio_getbyid = async (req,res) =>{
    const {id} = req.params;
    const data = await Laboratorio.findById(id);
    res.send(data);
 };

 exports.laboratorio_update = async (req,res) =>{
    const {id} = req.params;
    const {body} = req;

    const data = await Laboratorio.findOneAndUpdate({_id: id}, body);
    res.send(data);
};

exports.laboratorio_delete = async (req,res) =>{
    const {id} = req.params;
    await Laboratorio.deleteOne({_id: id})
    .catch((err) => console.log("ERROR:", err));
    res.send({message: "Registro eliminado"});
};