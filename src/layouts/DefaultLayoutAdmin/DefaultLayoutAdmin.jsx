import HeaderAdmin from "../../components/Admin/Header/HeaderAdmin";
import LeftAdmin from "../../components/Admin/Left/LeftAdmin";




function DefaultLayoutAdmin({ children }) {
  return (
    <div>
      <HeaderAdmin />
      <LeftAdmin />
      <div className="container">
        {children}
      </div>
      {/* <FooterAdmin /> */}
    </div>
  );
}

export default DefaultLayoutAdmin;