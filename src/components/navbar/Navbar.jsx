import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Hamid Tabrizi
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="facebook" />
            <img src="/instagram.png" alt="instagram" />
            <img src="/youtube.png" alt="youtube" />
            <img src="/dribbble.png" alt="dribbble" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
