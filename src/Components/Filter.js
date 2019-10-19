import React from 'react';
import {StyledFilter} from '../Styles/StyledFilter';

const Filter = () =>{




    return(
       <StyledFilter>
            <h4>Filter</h4>

            <select name="neighbourhood" className="filters neighbourhood">
                <option>Garfield Park</option>
            </select>

            <select name="House Type" className="filters houses">
                <option>Mansion</option>
            </select>

            <select name="Interior" className="filters Interior">
                <option> Classical</option>
            </select>

            <div className ="filters price">
               <span className="title">Price</span>
              <input type="text" name="min-price" className="min-price" />
              <input type="text" name="man-price" className="max-price"/>
            </div>

            <div className ="filters floor-space">
               <span className="title">Space</span>
              <input type="text" name="min-space" className="min-space" />
              <input type="text" name="min-space" className="max-space"/>
            </div>


            <div className ="filters radius">
               <span className="title">Radius</span>
              <input type="text" name="min-radius" className="min-radius" />
              <input type="text" name="min-radius" className="max-radius"/>
            </div>

            <div className="filter extras">

           <label for="beach"><span>Beach</span> <input type="checkbox" name="beach" value="beach"/></label>
           <label for="porches"><span>Porches</span> <input type="checkbox" name="porches" value="porches"/></label>
           <label for="elevator"><span>Elevator</span> <input type="checkbox" name="elevator" value="elevator"/></label>
           <label for="pool"><span>Swimming Pool</span> <input type="checkbox" name="pool" value="pool"/></label>>
           <label for="fireplace"><span>Fireplace</span> <input type="checkbox" name="fireplace" value="fireplace"/></label>

            </div>





       {/* <form>
           <div id="selects">
            <select>
            <option value="neighborhood">
              neighborhood
            </option>
            </select>
            <select>
            <option value ="Type of house">
               Type of house
            </option></select>
            <select>
                <option value="interior">
                    Interior
                </option>
            </select>
            </div>

            <div id ="sliders">
           
           <label for="price">Price</label>
           <input type="range" id="price" name="price"/>

           <label for="space">Space</label>
           <input type="range" id="space" name="space"/>


           <label for="radius">Radius</label>
           <input type="range" id="radius" name="radius"/>
            </div>
   
            <div id="checkbox">
            <input type="checkbox" name="vehicle1" value="elevator"/>Elevator<br/>
            <input type="checkbox" name="vehicle2" value="storage"/>Storage<br/>
            <input type="checkbox" name="vehicle3" value="seperate shower"/>Seperate Shower<br/>
            <input type="checkbox" name="vehicle2" value="fireplace"/>Fireplace <br/>
            <input type="checkbox" name="vehicle3" value="swimming pool" checked/>Swimming Pool<br/>
            </div>


            </form> */}
            </StyledFilter>
    )
}


export default Filter;