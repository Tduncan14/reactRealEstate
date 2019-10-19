import styled from 'styled-components';
import {pink,offwhite,white,darkgray} from './Main';

 export const StyledFilter = styled.section `
  display:flex;
  flex-direction:column;
  background-color:${offwhite};
  width:30%;
  min-height:70%;

  & .inside{
     padding:20px;
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
          color:blue;
      }
  }
 `;