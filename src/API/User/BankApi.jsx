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

    addPayment=(data) =>{
        const url='/payment/addPayment';
        return axiosPrivate.post(url,data);
    }
    getAllPaymentByUser=(userId) =>{
        const url=`/payment/getAllPaymentByUser/${userId}`;
        return axiosPrivate.get(url,userId);
    }
}

export default new BankApi();