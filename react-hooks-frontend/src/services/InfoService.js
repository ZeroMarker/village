import axios from './Config/AxiosConfig'

const EMPLOYEE_BASE_REST_API_URL = "/infos";

class InfoService {

    infoRate(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL + "/rate")
    }
    reRate(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL + "/rerate")
    }
    clearRate(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL + "/clear")
    }

    getAllInfos(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }

    createInfo(info){
        return axios.post(EMPLOYEE_BASE_REST_API_URL,info)
    }

    getInfoById(infoId){
        return axios.get(EMPLOYEE_BASE_REST_API_URL + "/" + infoId)
    }

    updateInfo(infoId,info){
        return axios.put(EMPLOYEE_BASE_REST_API_URL + "/" + infoId,info)

    }

    deleteInfo(infoId){
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + "/" + infoId);
    }

}

export default new InfoService();