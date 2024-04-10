import axiosClient from '../axiosClient';

class BankApi {
    getAll=() =>{
        const url='https://api.vietqr.io/v2/banks';
        return axiosClient.get(url);
    }
    
    
    
}

export default new BankApi();