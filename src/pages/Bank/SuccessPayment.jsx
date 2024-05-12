import UserApi from '../../API/User/UserApi';

const SuccessPayment = () => {
    const amount = localStorage.getItem('amount');
    const user = JSON.parse(localStorage.getItem('user'));
    const data = {
        coin: parseInt(amount)+ parseInt(user.coin),
        displayName: user.displayName,
        introduction: user.introduction,
    }
    
    const handleUpdateUser = async () => {
        try {
            const response = await UserApi.updateUser(data, user.id);
            console.log(response);
            localStorage.setItem('amountAdd', amount);
            localStorage.removeItem('amount');
            localStorage.setItem('paySuccess', true);
            window.location.href = '/buy-coins';
        } catch (error) {
            console.error(error);
        }
    }
    handleUpdateUser();
}

export default SuccessPayment;