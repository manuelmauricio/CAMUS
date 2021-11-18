import { axiosBase as axios } from "./Config";

//COLECCIÓN ESPECIALIDAD
export const CreateEspecialidad = async (especialidad) => {
    try{
        const response = await axios.post("/especialidad", especialidad, {
            // request config
        });
        console.log("createEspecialidadResp", response);
    }
    catch(error){
        console.error(error);
        return error;
    }
}

export const GetAllEspecialidad = async (token) => {
    try{
        const response = await axios.get("/especialidad", {
            // request config
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        console.log("getAllEspecialidadResp", response);
        return response.data;
    }
    catch(error){
        console.error(error);
        return error;
    }
}

//COLECCIÓN LABORATORIO
export const CreateLaboratorio = async (laboratorio) => {
    try{
        const response = await axios.post("/laboratorio", laboratorio);
        console.log("createLaboratorioResp", response);
    }
    catch(error){
        console.error(error);
        return error;
    }
}

export const GetAllLaboratorios = async () => {
    try{
        const response = await axios.get("/laboratorio");
        console.log("getAllLaboratorioResp", response);
        return response.data;
    }
    catch(error){
        console.error(error);
        return error;
    }
}

//COLECCIÓN CONSULTORIO
export const CreateConsultorio = async (consultorio,token) => {
    try{
        const response = await axios.post("/consultorio", consultorio, {
            // request config
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        console.log("createConsultorioResp", response);
    }
    catch(error){
        console.error(error);
        return error;
    }
}

export const GetAllConsultorios = async (token) => {
    try{
        const response = await axios.get("/consultorio", {
            // request config
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        console.log("getAllConsultorioResp", response);
        return response.data;
    }
    catch(error){
        console.error(error);
        return error;
    }
}

//COLECCIÓN USUARIO (MEDICOS)
export const CreateUsuario = async (usuario,token) => {
    try{
        const response = await axios.post("/usuario", usuario, {
            // request config
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        console.log("createUsuariooResp", response);
    }
    catch(error){
        console.error(error);
        return error;
    }
}
