import PropTypes from "prop-types";
import RoutingNavbar from "../components/navbar/RoutingNavbar";
import Footer from "../components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <RoutingNavbar />
      <main> {children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
