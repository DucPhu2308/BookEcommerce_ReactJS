import axiosClient from '../axiosClient';

class BankApi {
    getAll=() =>{
        const url='https://api.vietqr.io/v2/banks';
        return axiosClient.get(url);
    }

    getPayment=()=>{
        const url='http://localhost:8080/api/v1/payment/NCB';
        return axiosClient.get(url);
    }
    
    
    
}

export default new BankApi();