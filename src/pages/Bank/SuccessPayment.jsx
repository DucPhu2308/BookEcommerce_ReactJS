import UserApi from '../../API/User/UserApi';

const SuccessPayment = () => {
    const amount = localStorage.getItem('amount');
    const user = JSON.parse(localStorage.getItem('user'));
    const data={
        coin: parseInt(user.coin) + parseInt(amount),
        displayName: user.displayName,
        introduction: user.introduction,
    }
    const handleUpdateUser = async () => {
        try {
            const response = await UserApi.updateUserInfo(data);
            if (response.status === 200) {
                localStorage.setItem('user', JSON.stringify(response.data.data));
                localStorage.removeItem('amount');
                localStorage.setItem('paySuccess',true);
                window.location.href = '/buy-coins';
            }
        } catch (error) {
            console.log(error)
        }
    }
    handleUpdateUser();
}

export default SuccessPayment;