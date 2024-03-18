import Header from "@/components/User/Header/Header";
import Footer from "@/components/User/Footer/Footer";
import "./DefaultLayout.css";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
