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
