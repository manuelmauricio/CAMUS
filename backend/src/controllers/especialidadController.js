const Especialidad = require('../models/especialidadSchema');

exports.especialidad_create = async (req,res) => {
    const {body} = req;

    let newEspecialidad = new Especialidad(req.body);

    await newEspecialidad
     .save()
     .then((newDBObject) => console.log("Se a agregado:",newDBObject))
     .catch((err) => console.log("error", err));

    res.send(newEspecialidad);
};

exports.especialidad_getall = async (req,res) =>{
    console.log("resolving: /especialidad | especialidad_getall");
    const data = await Especialidad.find();
    res.send(data);
};

exports.especialidad_getbyid = async (req,res) =>{
    const {id} = req.params;
    const data = await Especialidad.findById(id);
    res.send(data);
 };

 exports.especialidad_update = async (req,res) =>{
    const {id} = req.params;
    const {body} = req;

    const data = await Especialidad.findOneAndUpdate({_id: id}, body);
    res.send(data);
};

exports.especialidad_delete = async (req,res) =>{
    const {id} = req.params;
    await Especialidad.deleteOne({_id: id})
    .catch((err) => console.log("ERROR:", err));
    res.send({message: "Registro eliminado"});
};