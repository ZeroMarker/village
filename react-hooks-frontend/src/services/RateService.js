import axios from './Config/AxiosConfig'

const RATE_BASE_REST_API_URL = "/rates";

class RateService {
    getAllRates(){
        return axios.get(RATE_BASE_REST_API_URL)
    }

    createRate(rate){
        return axios.post(RATE_BASE_REST_API_URL,rate)
    }

    getRateById(rateId){
        return axios.get(RATE_BASE_REST_API_URL + "/" + rateId)
    }

    updateRate(rateId,rate){
        return axios.put(RATE_BASE_REST_API_URL + "/" + rateId,rate)

    }

    deleteRate(rateId){
        return axios.delete(RATE_BASE_REST_API_URL + "/" + rateId);
    }

}

export default new RateService();