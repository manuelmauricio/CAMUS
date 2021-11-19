const Opinion = require('../models/opinionschema');

exports.opinion_create = async (req,res) => {
    const {body} = req;

    let newOpinion = new Opinion(req.body);

    await newOpinion
     .save()
     .then((newDBObject) => console.log("Se a agregado:",newDBObject))
     .catch((err) => console.log("error", err));

    res.send(newOpinion);
};

exports.opinion_getall = async (req,res) =>{
    const data = await Opinion.find();
    res.send(data);
};

exports.opinion_getbyid = async (req,res) =>{
    const {id} = req.params;
    const data = await Opinion.findById(id);
    res.send(data);
 };

 exports.opinion_getbydoctor = async (req,res) =>{
    const {id} = req.params;
    const data = await Opinion.find({idfk_doctor:id  });
    res.send(data);
 };

 exports.opinion_update = async (req,res) =>{
    const {id} = req.params;
    const {body} = req;

    const data = await Opinion.findOneAndUpdate({_id: id}, body);
    res.send(data);
};

exports.opinion_delete = async (req,res) =>{
    const {id} = req.params;
    await Opinion.deleteOne({_id: id})
    .catch((err) => console.log("ERROR:", err));
    res.send({message: "Registro eliminado"});
};