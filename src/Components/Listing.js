import React from 'react';
import {StyledListing} from'../Styles/StyledListing';

const Listing = () =>{

    return(
        <StyledListing>
         <section className="searchArea">Choose a home </section>
         
         <input type="text" name="search"/>
         
         <section className="sortBy">
             
         </section>

         <section className="listingsResults">
         
         </section>

         <section className="pagination">

         </section>
        </StyledListing>
    )
}


export default Listing;