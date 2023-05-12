import axios from './Config/AxiosConfig'

const EMPLOYEE_BASE_REST_API_URL = "/admin";

class AdminService {
    getAllAccounts(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }

    createAccount(account){
        return axios.post(EMPLOYEE_BASE_REST_API_URL,account)
    }

    getAccountById(accountId){
        return axios.get(EMPLOYEE_BASE_REST_API_URL + "/" + accountId)
    }

    updateAccount(accountId,account){
        return axios.put(EMPLOYEE_BASE_REST_API_URL + "/" + accountId,account)

    }

    deleteAccount(accountId){
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + "/" + accountId);
    }

}
export default new AdminService();