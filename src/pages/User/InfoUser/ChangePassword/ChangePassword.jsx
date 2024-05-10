
import './ChangePassword.css';
import {useState, useEffect} from 'react';
import UserApi from '../../../../API/User/UserApi';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ChangePassword = () => {
    
    const [newPassword, setNewPassword] = useState('');
    const [reNewPassword, setReNewPassword] = useState('');

    

    const handleChangeNewPassword = (e) => {
        setNewPassword(e.target.value);
    }

    const handleChangeReNewPassword = (e) => {
        setReNewPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(newPassword === '' || reNewPassword === ''){
            toast.error('Vui lòng nhập đầy đủ thông tin');
            return;
        }
        if(newPassword !== reNewPassword){
            toast.error('Mật khẩu nhập lại không khớp');
            return;
        }
        
        try {
            const res = await UserApi.changePassword(newPassword);
            if(res.status === 200){
                toast.success('Đổi mật khẩu thành công');
            }
        } catch (error) {
            toast.error('Đổi mật khẩu thất bại');
        }
    }
        
    return (
        <div>
            <ToastContainer />
            <div className="container_user_change_password_title">
                <div className="container_user_change_password_title_paga">
                    <span>Đổi mật khẩu</span>
                </div>
            </div >
            <form>
                <div className="container_user_change_password_item">
                    <label>Mật khẩu mới</label>
                    <input type="password" name="newPassword" id="name1" value={newPassword} onChange={handleChangeNewPassword}/>
                </div>

                <div className="container_user_change_password_item">
                    <label>Nhập lại mật khẩu mới</label>
                    <input type="password" name="reNewPassword" id="name2" value={reNewPassword} onChange={handleChangeReNewPassword}/>
                </div>
                <div className="container_user_change_password_item">
                    <button onClick={handleSubmit}>Đổi mật khẩu</button>
                </div>
            </form>
        </div>
    )
}

export default ChangePassword