import {axiosPrivate} from '../axiosClient';

class BankApi {
    getAll=() =>{
        const url='https://api.vietqr.io/v2/banks';
        return axiosPrivate.get(url);
    }

    createPayment=(data) =>{
        const url='/payment/create';
        return axiosPrivate.post(url,data);
    } 
}

export default new BankApi();