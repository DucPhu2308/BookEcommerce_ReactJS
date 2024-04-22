import {axiosPrivate} from '../axiosClient';

class BankApi {
    getAll=() =>{
        const url='https://api.vietqr.io/v2/banks';
        return axiosPrivate.get(url);
    }

    getPayment=()=>{
        const url='http://localhost:8080/api/v1/payment/NCB';
        return axiosPrivate.get(url);
    }
    
    
    
}

export default new BankApi();