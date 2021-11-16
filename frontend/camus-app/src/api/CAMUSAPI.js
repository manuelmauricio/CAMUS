import { axiosBase as axios } from "./Config";

//COLECCIÓN ESPECIALIDAD
export const CreateEspecialidad = async (especialidad) => {
    try{
        const response = await axios.post("/especialidad", especialidad);
        console.log("createEspecialidadResp", response);
    }
    catch(error){
        console.error(error);
        return error;
    }
}