import React from 'react';
import {StyledHeader} from '../Styles/StyledHeader.js';


const Header = () => {




  return(
     <>
     
       <StyledHeader>
         <div className="logo">Logo</div>


         <nav className="nav">
           <a href="#">Create Ads</a>
           <a href="#">About</a>
           <a href="#">Logo in</a>
           <a href="#" className="register-btn">Register</a>
         </nav>
       </StyledHeader>

     
      
     </>
  )
}


export default Header;