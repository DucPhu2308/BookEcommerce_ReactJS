import DefaultLayout from "../../../layouts/DefaultLayout/DefaultLayout";
import MyButton from "../../../components/common/MyButton/MyButton";
import Image404 from "@/assets/images/404.jpg"; 

import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <DefaultLayout>
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={Image404} alt="404" style={{ width: '50%', height: 'auto' }} />
                <Link to={'/'}>
                    <MyButton>Quay lại trang chủ</MyButton>
                </Link>
            </div>
        </DefaultLayout>
    );
};

export default NotFound;