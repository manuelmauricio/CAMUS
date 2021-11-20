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

export const GetEspecialidad = async (id,token) => {
    try{
        const response = await axios.get(`/especialidad/${id}`, {
            // request config
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        console.log("getEspecialidadResp", response);
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

export const GetLaboratorio = async (id,token) => {
    try{
        const response = await axios.get(`/laboratorio/${id}`, {
            // request config
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        console.log("getLaboratorioResp", response);
        return response.data;
    }
    catch(error){
        console.error(error);
        return error;
    }
}

export const UpdateLaboratorio = async (id,usuario,token) => {
    try{
        const response = await axios.put(`/laboratorio/${id}`, usuario, {
            // request config
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        console.log("updateLaboratorioResp", response);
    }
    catch(error){
        console.error(error);
        return error;
    }
}

export const DeleteLaboratorio = async (id,token) => {
    try{
        const response = await axios.delete(`/laboratorio/${id}`, {
            // request config
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        console.log("getLaboratorioResp", response);
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

export const GetAllUsuarios = async (token) => {
    try{
        const response = await axios.get("/usuario", {
            // request config
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        console.log("getAllUsuariosResp", response);
        return response.data;
    }
    catch(error){
        console.error(error);
        return error;
    }
}

export const GetUsuario = async (id,token) => {
    try{
        const response = await axios.get(`/usuario/${id}`, {
            // request config
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        console.log("getUsuarioResp", response);
        return response.data;
    }
    catch(error){
        console.error(error);
        return error;
    }
}

export const GetAllUsuariosCat = async (id,token) => {
    try{
        const response = await axios.get(`/usuario/cat/${id}`, {
            // request config
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        console.log("getUsuarioResp", response);
        return response.data;
    }
    catch(error){
        console.error(error);
        return error;
    }
}

export const UpdateUsuario = async (id,usuario,token) => {
    try{
        const response = await axios.put(`/usuario/${id}`, usuario, {
            // request config
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        console.log("updateUsuariooResp", response);
    }
    catch(error){
        console.error(error);
        return error;
    }
}

export const DeleteUsuario = async (id,token) => {
    try{
        const response = await axios.delete(`/usuario/${id}`, {
            // request config
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        console.log("getDeleteResp", response);
        return response.data;
    }
    catch(error){
        console.error(error);
        return error;
    }
}

//COLECCIÓN OPINIONES (OPINIONES)
export const CreateOpinion = async (opinion,token) => {
    try{
        const response = await axios.post("/opinion", opinion, {
            // request config
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        console.log("createOpinionResp", response);
    }
    catch(error){
        console.error(error);
        return error;
    }
}

export const GetAllOpinionesDoc = async (id,token) => {
    try{
        const response = await axios.get(`/opinion/doctor/${id}`, {
            // request config
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        console.log("getOpinionResp", response);
        return response.data;
    }
    catch(error){
        console.error(error);
        return error;
    }
}