import HeaderAdmin from "../../components/Admin/Header/HeaderAdmin";
import LeftAdmin from "../../components/Admin/Left/LeftAdmin";
import './DefaultLayoutAdmin.css';
import  { useState } from 'react';


const DefaultLayoutAdmin=({ children })=> {
  
  return (
    <div>
      <HeaderAdmin />
      <div className="container-admin">
        {children}
      </div>
    </div>
  );
}

export default DefaultLayoutAdmin;