import './ChangeInfo.css';
import { useState, useEffect } from 'react';
import UserApi from '../../../../API/User/UserApi';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const ChangeInfo = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [username, setUsername] = useState(user.displayName);
    const [email, setEmail] = useState(user.email);
    const [introduce, setIntroduce] = useState(user.introduction);
    
    

    const handleUserName = (e) => {
        setUsername(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleIntroduce = (e) => {
        setIntroduce(e.target.value);
    }

    const handleUpdateUser = async (e) => {
        e.preventDefault();
        const data = {
            displayName: username,
            email: email,
            introduction: introduce,
            coin: user.coin,
        }
        try {
            const response = await UserApi.updateUserInfo(data);
            if (response.status === 200) {
                toast.success('Cập nhật thông tin thành công');
                localStorage.setItem('user', JSON.stringify(response.data.data));
            }
        } catch (error) {
            toast.error('Cập nhật thông tin thất bại');
        }
    }




    return (
        <div>
            <ToastContainer />
            <div className="container_user_change_info_title">
                <div className="container_user_change_info_title_paga">
                    <span>Thông tin cá nhân</span>
                </div>
            </div >
            <form>
                <div className="container_user_change_info_item">
                    <label>Username</label>
                    <input type="text" value={username} onChange={handleUserName} />
                </div>

                <div className="container_user_change_info_item">
                    <label>Email</label>
                    <input type="text" value={email} onChange={handleEmail} />
                </div>

                <div className="container_user_change_info_item">
                    <label>Giới thiệu</label>
                    <textarea name="name" id="name" cols="30" rows="10" value={introduce} onChange={handleIntroduce}></textarea>
                </div>
                <div className="container_user_change_info_item">
                    <button onClick={handleUpdateUser}>Cập nhật</button>
                </div>
            </form>
        </div >
    );
}
export default ChangeInfo;