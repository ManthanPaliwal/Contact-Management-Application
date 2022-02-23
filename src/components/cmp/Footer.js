import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () =>{
    return(
        <div className='fixed-bottom'>
        <footer className="page-footer bg-dark">
        <div className="footer-copyright text-center py-3" style={{color:"white"}}>© 2022 ManthanPaliwal:
          <Link to="/"> ContactManagementApp.com</Link>
        </div>
      </footer>
        </div>
    )
}
export default Footer;