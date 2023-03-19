import React from 'react';
import './style.css';

function Footer() {
  return (    
    <div className='row'>
        <div className="icons col-12">
            <a href="https://github.com/AliSuleym/">
                <i className="fa-brands fa-github fa-lg fa-fw" aria-hidden="true"></i>
            </a>
            <a href="#">
                <i className="fa-brands fa-linkedin fa-lg fa-fw" aria-hidden="true"></i>
            </a>
           
            <a href="#">
                <i className="fa-brands fa-twitter fa-lg fa-fw" aria-hidden="true"></i>
            </a>
        </div>
    </div>
  );
}
export default Footer;



// <FontAwesomeIcon icon={['fab', 'microsoft']} />
// <FontAwesomeIcon icon={['fab', 'google']} />
