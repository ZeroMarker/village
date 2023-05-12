import axios from './Config/AxiosConfig'

const EMPLOYEE_BASE_REST_API_URL = "documents";

class DocumentService {



    getAllDocuments(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }

    createDocument(customer){
        return axios.post(EMPLOYEE_BASE_REST_API_URL,customer)
    }

    getDocumentById(customerId){
        return axios.get(EMPLOYEE_BASE_REST_API_URL + "/" + customerId)
    }

    updateDocument(customerId,customer){
        return axios.put(EMPLOYEE_BASE_REST_API_URL + "/" + customerId,customer)

    }

    deleteDocument(customerId){
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + "/" + customerId);
    }

}

export default new DocumentService();