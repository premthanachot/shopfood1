import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Navbar />
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
