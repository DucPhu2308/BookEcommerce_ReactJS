import LeftAdmin from "../../../components/Admin/Left/LeftAdmin";
import DefaultLayoutAdmin from "../../../layouts/DefaultLayoutAdmin/DefaultLayoutAdmin"
import ManageUser from "../ManageUser/ManageUser";
import { useState } from 'react';
import PropTypes from 'prop-types';
import ManageGenre from "../ManageGenre/ManageGenre";
import DashBoard from "../DashBoard/DashBoard";
import GrantPermission from "../GrantPermission/GrantPermission";

const Form = ({ selectItem }) => {
    // Component code here

    let form;
    switch (selectItem) {
        case "Quản lý khách hàng":
            form = <ManageUser />;
            break;
        case "Quản lý truyện":
            form = <div>Quản lý truyện</div>;
            break;
        case "Quản lý bình luận":
            form = <div>Quản lý bình luận</div>;
            break;
        case "Quản lý thể loại":
            form = <ManageGenre />;
            break;
        case "Cấp quyền":
            form = <GrantPermission />;
            break;
        case "Theo dõi doanh thu":
            form = <DashBoard />;
            break;
        // default:
        //     form = <ManageUser />;
        //     break;
        
    }
    return (
        <>
            {form}
        </>
    
    );
};


Form.propTypes = {
    selectItem: PropTypes.string.isRequired,
};

const AdminHome = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    
    
    return (
        <DefaultLayoutAdmin>
            <LeftAdmin onSelect={setSelectedItem}/>
            <Form selectItem={selectedItem}/>
        </DefaultLayoutAdmin>
    )
}

export default AdminHome;