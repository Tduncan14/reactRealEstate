import React from 'react';
import StyledHeader from '../Styles/StyledHeader';


const Header = () => {




  return(
     <>
     <StyledHeader>

       <header>
         <div>Logo</div>


         <nav>
           <a href="#">Create Ads</a>
           <a href="#">About</a>
           <a href="#">Logo in</a>
           <a href="#" className="register-btn">Register</a>
         </nav>
       </header>

     </StyledHeader>
      
     </>
  )
}


export default Header;