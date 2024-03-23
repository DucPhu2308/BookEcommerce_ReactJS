import Header from "@/components/User/Header/Header";
import Footer from "@/components/User/Footer/Footer";
import "./DefaultLayout.css";
import PropType from "prop-types";
const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
        <div className="container">{children}</div>
      <Footer />
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropType.node.isRequired,
};

export default DefaultLayout;
