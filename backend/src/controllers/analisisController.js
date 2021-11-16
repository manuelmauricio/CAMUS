const Analisis = require('../models/analisisSchema');

exports.analisis_create = async (req,res) => {
    const {body} = req;

    let newAnalisis = new Analisis(req.body);

    await newAnalisis
     .save()
     .then((newDBObject) => console.log("Se a agregado:",newDBObject))
     .catch((err) => console.log("error", err));

    res.send(newAnalisis);
};

exports.analisis_getall = async (req,res) =>{
    const data = await Analisis.find();
    res.send(data);
};

exports.analisis_getbyid = async (req,res) =>{
    const {id} = req.params;
    const data = await Analisis.findById(id);
    res.send(data);
 };

 exports.analisis_update = async (req,res) =>{
    const {id} = req.params;
    const {body} = req;

    const data = await Analisis.findOneAndUpdate({_id: id}, body);
    res.send(data);
};

exports.analisis_delete = async (req,res) =>{
    const {id} = req.params;
    await Analisis.deleteOne({_id: id})
    .catch((err) => console.log("ERROR:", err));
    res.send({message: "Analisis eliminado"});
};