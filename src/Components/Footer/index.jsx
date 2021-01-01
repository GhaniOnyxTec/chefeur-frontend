import React from 'react';
import './style.css'

const Footer = () => {
  return (
    <div className="d-flex flex-wrap p-2 justify-content-around footer fixed-bottom">
      <div className="footer-address p-2">
        <address>
          Chefeur Inc
          <br />
          1234 Walder Street
          <br />
          San Francisco, CA 9839
          <br />
          Privacy Policy
        </address>
      </div>
      <div className="footer-contact p-2">
        Hours
        <br />
        Mon-Sat
        <br />
        email@chefeur.com
        <br />
        123-123-5467
      </div>
    </div>
  );
};

export default Footer;
