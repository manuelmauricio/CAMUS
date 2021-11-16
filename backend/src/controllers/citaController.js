const Cita = require('../models/citaschema');

exports.cita_create = async (req,res) => {
    const {body} = req;

    let newCita = new Cita(req.body);

    await newCita
     .save()
     .then((newDBObject) => console.log("Se a agendado:",newDBObject))
     .catch((err) => console.log("error", err));

    res.send(newCita);
};

exports.cita_getall = async (req,res) =>{
    const data = await Cita.find();
    res.send(data);
};

exports.cita_getbyid = async (req,res) =>{
    const {id} = req.params;
    const data = await Cita.findById(id);
    res.send(data);
 };

 exports.cita_update = async (req,res) =>{
    const {id} = req.params;
    const {body} = req;

    const data = await Cita.findOneAndUpdate({_id: id}, body);
    res.send(data);
};

exports.cita_delete = async (req,res) =>{
    const {id} = req.params;
    await Cita.deleteOne({_id: id})
    .catch((err) => console.log("ERROR:", err));
    res.send({message: "Cita Cancelada"});
};