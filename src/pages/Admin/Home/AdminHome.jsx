import LeftAdmin from "../../../components/Admin/Left/LeftAdmin";
import DefaultLayoutAdmin from "../../../layouts/DefaultLayoutAdmin/DefaultLayoutAdmin"
import ManageUser from "../ManageUser/ManageUser";
import { useState } from 'react';
import ManageGenre from "../ManageGenre/ManageGenre";
import DashBoard from "../DashBoard/DashBoard";
import ManageBook from "../ManageBook/ManageBook";

const Form = ({ selectItem }) => {
    // Component code here

    let form;
    switch (selectItem) {
        case "Quản lý khách hàng":
            form = <ManageUser />;
            break;
        case "Quản lý truyện":
            form = <ManageBook/>;
            break;
        case "Quản lý thể loại":
            form = <ManageGenre />;
            break;
        case "Theo dõi doanh thu":
            form = <DashBoard />;
            break;
        default:
            form = <ManageBook />;
            break;
        
    }
    return (
        <>
            {form}
        </>
    
    );
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