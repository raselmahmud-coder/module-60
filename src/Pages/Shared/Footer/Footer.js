import React from "react";
import './Footer.css';
const Footer = () => {
  return (
    <footer className="text-center mt-5 footer-fixed">
      <span>Rasel Mahmud &copy;Copy Right 2019 - {new Date().getFullYear()}</span>
    </footer>
  );
};

export default Footer;
