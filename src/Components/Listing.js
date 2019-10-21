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
                            <span className="user-date">05/06/2019</span>
                        </div>
                        <div className="listing-details">
                            <div className="floor-space"><span>4000ft&sup2;</span></div>
                            <div className="bedrooms"><i>🛏️</i> 
                            <span>3 bedrooms</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-info">
                  <span>2000 / month</span>
                  <span>Chicago IL 📍 </span>
                </div>
            </div>
         </section>

         <section className="pagination">
           <ul className="paginations-number">
               <li>Prev</li>
               <li>1</li>
               <li>2</li>
               <li>3</li>
               <li>4</li>
               <li>5</li>
               <li>Next</li>
    

           </ul>
         </section>
        </StyledListing>
    )
}


export default Listing;