import styled from 'styled-components';
import {pink,offwhite,white,darkgray} from './Main';

 export const StyledFilter = styled.section `
  background-color:${offwhite};
  width:30%;
  display:inline-block;
  float:left;
  min-height:70%;

  & .inside{
     padding:20px;
     max-width:300px;
  }
    select {
        background:transparent;
        padding:10px;
        font-size:14px;
        font-weight:300;
        color:${darkgray};
        display:block;
        margin-bottom:25px;
        width:100%;
    }

 h4{
     margin-bottom:25px;
     text-transform:uppercase;
     font-weight:700px;
     font-size: .9rem;
 }

  .filters{



      & .title{
          font-size:0.9rem;
          display:block;
          margin-bottom:1rem;
          color:${darkgray};}


   & input[type="text"]{
        width:37%;
        border-radius:5px;
        font-size:1rem;
        padding:0.4rem;
        display:inline-block;
        margin-right:2.5%;
        margin-bottom:1rem;

    }
     }

     & .extras {



        label{
             display:block;
             width:100%;
         }
  }
 `;