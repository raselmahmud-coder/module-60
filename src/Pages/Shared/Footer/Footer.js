import React from "react";

const Footer = () => {
  return (
    <footer className="text-center mt-5">
      <span>&copy;copyright 2019 - {new Date().getFullYear()}</span>
    </footer>
  );
};

export default Footer;
