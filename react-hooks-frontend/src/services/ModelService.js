import axios from './Config/AxiosConfig'

const EMPLOYEE_BASE_REST_API_URL = "/models";

class ModelService{
    getAllModels(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }

    createModel(model){
        return axios.post(EMPLOYEE_BASE_REST_API_URL,model)
    }

    getModelById(modelId){
        return axios.get(EMPLOYEE_BASE_REST_API_URL + "/" + modelId)
    }

    updateModel(modelId,model){
        return axios.put(EMPLOYEE_BASE_REST_API_URL + "/" + modelId,model)

    }

    deleteModel(modelId){
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + "/" + modelId);
    }

}
export default new ModelService();