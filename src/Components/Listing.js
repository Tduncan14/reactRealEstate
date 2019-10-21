import React from 'react';
import {StyledListing} from'../Styles/StyledListing';

const Listing = () =>{

    return(
        <StyledListing>
         <section className="searchArea">Choose a home </section>
         
         <input type="text" name="search"/>

         <section className="sortBy">
             
             <div>
                 390 results found
             </div>

             <div className="sortOptions">
                 <select name="sortby" className="sortArea">
                   <option value="price-asc">Highest Price</option>
                   <option value="price-dsc">Lowest Price</option>
                 </select>

                  <div className="view">
                  <i className="fa fa-th-list">📑</i>
                  <i className="fa fa-th-menu">🗄</i>
                  </div>
             </div>
         </section>

         <section className="listingsResults">
            <div className ="listing">
                <div className="listing-image">
                    <span className="Address">Address</span>
                    <div className="details">
                        <div className="user-image">
                            <img src=""/>
                        </div>
                        <div className="user-details">
                            <span className="user-name">Will Smith</span>
                        </div>
                    </div>
                    <img src="" />

                </div>
            </div>
         </section>

         <section className="pagination">

         </section>
        </StyledListing>
    )
}


export default Listing;